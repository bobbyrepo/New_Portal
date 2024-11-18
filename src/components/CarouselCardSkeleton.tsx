import React, { FC } from 'react'

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Card, CardContent, Typography, Box, Skeleton } from '@mui/material'

const CarouselCardSkeleton: FC = () => {

    return (
        <Box sx={{ position: "relative" }}>

            <Card className="grid md:grid-cols-3 lg:grid-cols-2 shadow-none border-2">
                <Box className='col-span-2 lg:col-span-1 relative md:h-[360px] h-[280px]'>
                    <Skeleton variant="rectangular" height={"100%"} />
                </Box>

                <CardContent className='relative'>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton className='mt-2' />
                    <Skeleton width="60%" />
                    <Box className="md:absolute bottom-1 w-full ">
                        <Skeleton width="30%" />
                        <Skeleton width="40%" />
                    </Box>
                </CardContent>

            </Card>

            <KeyboardArrowLeftIcon
                className='absolute text-4xl top-1/2 left-0 -translate-y-1/2
                text-white bg-neutral-800 rounded-full mx-2'
            />
            <KeyboardArrowRightIcon
                className='absolute text-4xl top-1/2 right-0 -translate-y-1/2
                text-white bg-neutral-800 rounded-full mx-2'
            />

        </Box >
    )
}

export default CarouselCardSkeleton