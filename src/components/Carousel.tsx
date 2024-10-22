import React, { useState, useEffect } from 'react'

import { NewsCardsType } from '../utils/Types';
import CarouselCard from './CarouselCard';
import CarouselList from './CarouselList';

import { getTopHeadlines } from '../utils/api';



function Carousel() {

    const [active, setActive] = useState<number>(0);

    const [topHeadlines, setTopHeadlines] = useState<NewsCardsType[]>([])

    const fetchTopHeadlines = async () => {
        try {
            const response = await getTopHeadlines(10)
            setTopHeadlines(response.data.articles.filter((res: NewsCardsType) => res.urlToImage != null))
        }
        catch (err) {
            console.log("Fetch Error in Top Headlines", err)
        }
    }

    useEffect(() => {
        fetchTopHeadlines()
    }, [])

    // Toggle function to handle left and right navigation
    const toggleActive = (direction: 'next' | 'prev') => {
        if (direction === 'next') {
            // Move to the next item, or loop back to the first item if on the last one
            setActive((prevActive) => (prevActive + 1) % topHeadlines.length);
        } else if (direction === 'prev') {
            // Move to the previous item, or loop back to the last item if on the first one
            setActive((prevActive) =>
                (prevActive - 1 + topHeadlines.length) % topHeadlines.length
            );
        }
    };
    return (
        <div className="cursor-pointer">

            <CarouselCard
                topHeadlines={topHeadlines}
                active={active}
                toggleActive={toggleActive}
            />

            <CarouselList
                active={active}
                topHeadlines={topHeadlines}
            />

        </div>
    )
}

export default Carousel