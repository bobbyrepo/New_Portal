import React, { FC } from 'react'

import NewsCard from './NewsCard'
import { NewsCardsType } from '../utils/Types'
import { Box } from '@mui/material'
import NewsCardSkeleton from './NewsCardSkeleton';

interface ExploreCardsListProps {
    loading: boolean;
    list?: NewsCardsType[];
}

const ExploreCardsList: FC<ExploreCardsListProps> = ({ loading, list }) => {
    return (
        <Box className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 md:w-full w-[95%] mx-auto">
            {list?.map((item) => (
                <Box key={item.title} className="inline-block">
                    <NewsCard news={item} />
                </Box>
            ))}
            {
                loading && [...Array(10)].map((_, ind) => (
                    <NewsCardSkeleton key={ind} />
                ))
            }
        </Box>)
}

export default ExploreCardsList