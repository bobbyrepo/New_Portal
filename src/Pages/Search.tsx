import React, { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getByQuery } from '../utils/api';

import { Container, Typography, Button, Box } from '@mui/material';

import { NewsCardsType } from '../utils/Types';
import ExploreCardsList from '../components/ExploreCardsList';
import NewsCardSkeleton from '../components/NewsCardSkeleton';

const Search: FC = () => {
    const [newsList, setNewsList] = useState<NewsCardsType[]>([]);
    const [pageNo, setPageNo] = useState(1);
    const [loadMore, setLoadMore] = useState<boolean>(true);      // State to check if more news is available
    const [loading, setLoading] = useState<boolean>(true);

    const location = useLocation();
    const category = location.state?.category; // Get category from state
    const query = location.state?.query; // Get query from state

    const navigate = useNavigate();

    const fetchNews = async () => {
        setLoading(true)
        let response = await getByQuery(query!, 20, pageNo);

        if (response && response.data) {
            const newArticles = response.data.articles.filter((item: NewsCardsType) => item.urlToImage != null);

            // Append new articles to the existing news list (for "load more" feature)
            setNewsList(prevNews => [...prevNews, ...newArticles]);

            // Update "load more" state
            setLoadMore(newsList.length + newArticles.length < response.data.totalResults);
            setLoading(false)
        }
        else setLoading(false)
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

            {newsList.length > 0 ? (
                <ExploreCardsList loading={loading} list={newsList} />
            ) : (
                <Box className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 md:w-full w-[90%] mx-auto">
                    {[...Array(20)].map((_, ind) => (
                        <NewsCardSkeleton key={ind} />
                    ))}
                </Box >
            )}

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
