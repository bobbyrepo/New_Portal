import React from 'react'

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Card, CardMedia, CardContent, Typography } from '@mui/material'
import { NewsCardsType } from '../utils/Types';

interface CarouselCardProps {
    topHeadlines: NewsCardsType[];
    active: number;
    toggleActive: (direction: 'next' | 'prev') => void;
}

function CarouselCard({ topHeadlines, active, toggleActive }: CarouselCardProps) {
    return (
        <div className='relative '>

            <Card className="grid md:grid-cols-3 lg:grid-cols-2 shadow-none border-2">
                <div className='col-span-2 lg:col-span-1 relative md:h-[360px] h-[280px] object-cover'>
                    <CardMedia
                        component="img"
                        className='h-full'
                        image={topHeadlines[active]?.urlToImage}
                    />
                    <div className="absolute -bottom-0 h-36 w-full _carouselGradient"></div>
                    <Typography gutterBottom
                        className='absolute bottom-0 px-6 font-serif
                        text-white md:text-[22px] sm:text-xl text-lg leading-8 line-clamp-3'
                    >
                        {topHeadlines[active]?.title}
                    </Typography>
                </div>

                <CardContent className='relative'>
                    <Typography gutterBottom className='sm:text-xl text-lg font-serif line-clamp-4'>
                        {topHeadlines[active]?.description}
                    </Typography>
                    <Typography variant="body2"
                        className='sm:text-lg text-base font-serif line-clamp-4'
                        sx={{ color: 'text.secondary' }}
                    >
                        {topHeadlines[active]?.content?.substring(0, 200)}
                    </Typography>
                    <Typography variant="body2" className="md:absolute bottom-1 w-full sm:text-lg text-base ">
                        <h2 className='truncate'>Source : {topHeadlines[active]?.source.name}</h2>
                        <h3>Published Date :
                            {new Date(topHeadlines[active]?.publishedAt).toLocaleDateString()}
                        </h3>
                    </Typography>
                </CardContent>

            </Card>

            <KeyboardArrowLeftIcon
                onClick={() => toggleActive('prev')}
                className='absolute text-4xl top-1/2 left-0 -translate-y-1/2
                text-white bg-neutral-800 rounded-full mx-2'
            />
            <KeyboardArrowRightIcon
                onClick={() => toggleActive('next')}
                className='absolute text-4xl top-1/2 right-0 -translate-y-1/2
                text-white bg-neutral-800 rounded-full mx-2'
            />

        </div>
    )
}

export default CarouselCard