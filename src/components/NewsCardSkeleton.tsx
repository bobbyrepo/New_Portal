import React, { FC } from 'react'

import { Grid, Grid2, Card, CardMedia, CardContent, Typography, Box, Skeleton } from '@mui/material'



const NewsCardSkeleton: FC = () => {

    return (
        <Card className="relative h-[400px] shadow-none border-2">
            <Skeleton variant="rectangular">
                <Box className="h-[180px] aspect-[16/9]" />
            </Skeleton>
            <CardContent>
                <Skeleton />
                <Skeleton />
                <Skeleton className='mt-2' />
                <Skeleton width="60%" />

                <Box className="absolute bottom-1 w-[90%] flex justify-between">
                    <Skeleton width="30%" />
                    <Skeleton width="40%" />
                </Box>
            </CardContent>
        </Card>


    )
}

export default NewsCardSkeleton