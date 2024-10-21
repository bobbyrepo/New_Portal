import React from 'react'

import { Grid2, Card, CardMedia, CardContent, Typography } from '@mui/material'
import { NewsCardsType } from '../utils/Types'

function CarouselList({ active, topHeadlines }: { active: number, topHeadlines: NewsCardsType[] }) {

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
        <Grid2 container spacing={2} mt={2}>
            {nextFiveHeadlines.map((item, ind) =>
                <Grid2 key={ind} size={2.4} >
                    <Card className="relative h-fit">
                        <CardMedia
                            component="img"
                            className='w-full aspect-[16/10] object-cover'
                            image={topHeadlines[item]?.urlToImage}
                        />
                        <div className="absolute -bottom-3  h-36 w-full _carouselGradient"></div>

                        <CardContent className='p-2 absolute bottom-0 text-white' >
                            <Typography className='font-serif text-[17px] line-clamp-3'>
                                {topHeadlines[item]?.title}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid2>
            )}
        </Grid2>
    )
}

export default CarouselList