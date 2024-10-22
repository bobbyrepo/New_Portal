import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getByQuery } from '../utils/api';

import { Button } from '@mui/material';

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
        <div className="w-[90%] mx-auto mb-20 mt-10">
            <h1 className="text-3xl font-serif cursor-pointer">{category}</h1>
            <ExploreCardsList list={newsList} />

            {/* Load More button */}
            {loadMore && (
                <div className="flex justify-center mt-6">
                    <Button
                        onClick={handleLoadMore}
                        variant="contained"
                        disableElevation
                        className='bg-neutral-700'
                    >Load More
                    </Button>
                </div>
            )}
        </div>
    );
}

export default Search;
