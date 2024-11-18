import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getByQuery, getTopHeadlines } from '../utils/api';

import { Container, Typography, Button, Box } from '@mui/material';

import { NewsCardsType } from '../utils/Types';
import ExploreCardsList from '../components/ExploreCardsList';
import NewsCardSkeleton from '../components/NewsCardSkeleton';

// Define type for the category data object
type CategoryData = {
    [key: string]: {
        articles: NewsCardsType[];
        pageNo: number;
    };
};

const Explore: FC = () => {
    const [categoryData, setCategoryData] = useState<CategoryData>({});
    const [loadMore, setLoadMore] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(true);

    const location = useLocation();
    const category = location.state?.category; // Get category from state

    const fetchNews = async () => {
        if (!category) return;

        const currentCategoryData = categoryData[category] || { articles: [], pageNo: 1 };
        const pageNo = currentCategoryData.pageNo;

        setLoading(true)

        let response;
        if (category === "Top Head Lines") {
            response = await getTopHeadlines(20, pageNo);
        } else {
            response = await getByQuery(category, 20, pageNo);
        }

        if (response && response.data) {
            const newArticles = response.data.articles.filter(
                (item: NewsCardsType) => item.urlToImage != null
            );

            // Update or add the category with new articles and incremented page number
            setCategoryData(prevData => ({
                ...prevData,
                [category]: {
                    articles: [...(prevData[category]?.articles || []), ...newArticles],
                    pageNo: pageNo + 1,
                },
            }));

            // Update load more state based on total results
            setLoadMore(currentCategoryData.articles.length + newArticles.length < response.data.totalResults);
            setLoading(false)
        }
        else setLoading(false)
    };

    useEffect(() => {
        fetchNews();
    }, [category]);

    // Load more handler
    const handleLoadMore = () => {
        fetchNews();
    };

    return (
        <Container maxWidth={false} sx={{ width: "90%", mt: 5, mb: 10 }}>

            <Typography variant="h4" sx={{ fontFamily: 'serif', cursor: 'pointer', mb: 1 }}>
                {category}
            </Typography>

            {categoryData[category]?.articles.length > 0 ? (
                <ExploreCardsList loading={loading} list={categoryData[category]?.articles || []} />
            ) : (
                <Box className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 md:w-full w-[90%] mx-auto">
                    {[...Array(20)].map((_, ind) => (
                        <NewsCardSkeleton key={ind} />
                    ))}
                </Box >
            )}

            {/* Load More button */}
            {loadMore && (
                <Box display="flex" justifyContent="center" mt={3}>
                    <Button
                        onClick={handleLoadMore}
                        variant="contained"
                        disableElevation
                        className='bg-neutral-700'
                    >
                        Load More
                    </Button>
                </Box>
            )}
        </Container>
    );
}

export default Explore;
