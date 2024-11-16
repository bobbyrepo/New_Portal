import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getByQuery } from '../utils/api';

import { Container, Typography, Button, Box } from '@mui/material';

import { NewsCardsType } from '../utils/Types';
import ExploreCardsList from '../components/ExploreCardsList';

function Search() {
    const [newsList, setNewsList] = useState<NewsCardsType[]>([]);
    const [pageNo, setPageNo] = useState(1);
    const [loadMore, setLoadMore] = useState<boolean>(true);      // State to check if more news is available

    const location = useLocation();
    const category = location.state?.category; // Get category from state
    const query = location.state?.query; // Get query from state

    const navigate = useNavigate();

    const fetchNews = async () => {
        let response = await getByQuery(query!, 20, pageNo);

        if (response && response.data) {
            const newArticles = response.data.articles.filter((item: NewsCardsType) => item.urlToImage != null);

            // Append new articles to the existing news list (for "load more" feature)
            setNewsList(prevNews => [...prevNews, ...newArticles]);

            // Update "load more" state
            setLoadMore(newsList.length + newArticles.length < response.data.totalResults);
        }
    };

    useEffect(() => {
        if (!category || !query) navigate(`/`)
        fetchNews();
    }, [category, query]);

    // Fetch more news when page number changes
    useEffect(() => {
        if (pageNo > 1) {
            fetchNews();
        }
    }, [pageNo]);


    // Function to load more articles
    const handleLoadMore = () => {
        setPageNo(prevPage => prevPage + 1);
    };

    return (
        <Container maxWidth={false} sx={{ width: "90%", mt: 5, mb: 10 }}>

            <Typography variant="h4" sx={{ fontFamily: 'serif', cursor: 'pointer', mb: 1 }}>
                {category}
            </Typography>
            <ExploreCardsList list={newsList} />

            {/* Load More button */}
            {
                loadMore && (
                    <Box display="flex" justifyContent="center" mt={3}>
                        <Button
                            onClick={handleLoadMore}
                            variant="contained"
                            disableElevation
                            className='bg-neutral-700'
                        >Load More
                        </Button>
                    </Box>
                )
            }
        </Container>
    );
}

export default Search;
