import React, { FC } from 'react'
import { Link } from 'react-router-dom';

import { Grid2, Card, CardMedia, CardContent, Typography, Box } from '@mui/material'
import { NewsCardsType } from '../utils/Types'

interface CarouselListProps {
    active: number;
    topHeadlines: NewsCardsType[];
}

const CarouselList: FC<CarouselListProps> = ({ active, topHeadlines }) => {

    // Function to get the next 5 elements from the active index, wrapping around if necessary
    const getNextFiveElements = (active: number, topHeadlines: NewsCardsType[]) => {
        const headlinesLength = topHeadlines.length;
        const nextFive = [];

        for (let i = 0; i < 5; i++) {
            const index = (active + i + 1) % headlinesLength; // Circular wrapping
            nextFive.push(index);
        }

        return nextFive;
    };

    const nextFiveHeadlines = getNextFiveElements(active, topHeadlines);

    return (
        <Grid2 className="grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 mt-8">
            {nextFiveHeadlines.map((item, ind) =>
                <Grid2 key={ind}>
                    <Link to={topHeadlines[item]?.url}>

                        <Card className="relative h-fit">
                            <CardMedia
                                component="img"
                                className='w-full aspect-[16/10] object-cover'
                                image={topHeadlines[item]?.urlToImage}
                            />
                            <Box className="absolute -bottom-3  h-36 w-full _carouselGradient"></Box>

                            <CardContent className='p-2 absolute bottom-0 text-white' >
                                <Typography className='font-serif md:text-[17px] sm:text-[15px] text-[14px] line-clamp-3'>
                                    {topHeadlines[item]?.title}
                                </Typography>
                            </CardContent>
                        </Card>

                    </Link>
                </Grid2>
            )}
        </Grid2>
    )
}

export default CarouselList