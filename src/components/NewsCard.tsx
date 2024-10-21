import React from 'react'

import { Grid, Grid2, Card, CardMedia, CardContent, Typography } from '@mui/material'
import { NewsCardsType } from '../utils/Types'

function NewsCard({ news }: { news: NewsCardsType }) {
    return (
        <Card className="relative h-[400px] shadow-none border-2">
            <CardMedia
                component="img"
                className="h-[180px] aspect-[16/9] object-cover"
                image={news.urlToImage}
            />
            <CardContent>
                <Typography gutterBottom className="text-[18px] leading-6 line-clamp-3">
                    {news.title}
                </Typography>
                <Typography variant="body2" className="line-clamp-4" sx={{ color: 'text.secondary' }}>
                    {news.description}
                </Typography>
                <Typography className="absolute bottom-1 w-[90%] flex justify-between">
                    <h2 className="w-[150px] truncate">{news.source.name}</h2>
                    <h3>{new Date(news.publishedAt).toLocaleDateString()}</h3>
                </Typography>
            </CardContent>
        </Card>)
}

export default NewsCard