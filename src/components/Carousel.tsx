import React, { FC, useState, useEffect } from 'react';

import { NewsCardsType } from '../utils/Types';
import CarouselCard from './CarouselCard';
import CarouselList from './CarouselList';

import { getTopHeadlines } from '../utils/api';

import { Box, Typography } from '@mui/material';
import CarouselCardSkeleton from './CarouselCardSkeleton';
import CarouselListSkeleton from './CarouselListSkeleton';

const Carousel: FC = () => {
    const [active, setActive] = useState<number>(0);
    const [topHeadlines, setTopHeadlines] = useState<NewsCardsType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchTopHeadlines = async () => {
        setLoading(true);
        setError(null);

        const response = await getTopHeadlines(10);

        if (response.error) {
            setError(response.error.message || 'Failed to fetch top headlines.');
            setLoading(false);
            return;
        }

        if (response.data) {
            const filteredHeadlines = response.data.articles.filter(
                (res: NewsCardsType) => res.urlToImage != null
            );
            setTopHeadlines(filteredHeadlines);
        }

        setLoading(false);
    };

    useEffect(() => {
        fetchTopHeadlines();
    }, []);

    // Toggle function to handle left and right navigation
    const toggleActive = (direction: 'next' | 'prev') => {
        if (direction === 'next') {
            setActive((prevActive) => (prevActive + 1) % topHeadlines.length);
        } else if (direction === 'prev') {
            setActive((prevActive) => (prevActive - 1 + topHeadlines.length) % topHeadlines.length);
        }
    };

    return (
        <Box sx={{ cursor: 'pointer' }}>
            {error && (
                <Typography color="error" sx={{ mb: 3 }}>
                    {error}
                </Typography>
            )}

            {loading ? (
                <CarouselCardSkeleton />
            ) : (
                topHeadlines.length > 0 && (
                    <CarouselCard
                        topHeadlines={topHeadlines}
                        active={active}
                        toggleActive={toggleActive}
                    />
                )
            )}

            {loading ? (
                <CarouselListSkeleton />
            ) : (
                topHeadlines.length > 0 && (
                    <CarouselList active={active} topHeadlines={topHeadlines} />
                )
            )}
        </Box>
    );
};

export default Carousel;
