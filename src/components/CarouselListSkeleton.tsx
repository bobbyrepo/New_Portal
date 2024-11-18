import React, { FC } from 'react'

import { Grid2, Card, CardMedia, CardContent, Typography, Box, Skeleton } from '@mui/material'


const CarouselListSkeleton: FC = () => {

    return (
        <Grid2 className="grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 mt-8">
            {[...Array(5)].map((_, ind) =>
                <Grid2 key={ind}>
                    <Card className="relative h-fit">
                        <Skeleton variant="rectangular" width={"100%"}>
                            <Box className="aspect-[16/10]" />
                        </Skeleton>


                        {/* <Box className="absolute -bottom-3  h-36 w-full _carouselGradient"></Box>

                        <CardContent className='p-2 absolute bottom-0 text-white' >
                            <Typography className='font-serif md:text-[17px] sm:text-[15px] text-[14px] line-clamp-3'>
                                {topHeadlines[item]?.title}
                            </Typography>
                        </CardContent> */}
                    </Card>
                </Grid2>
            )}
        </Grid2>
    )
}

export default CarouselListSkeleton