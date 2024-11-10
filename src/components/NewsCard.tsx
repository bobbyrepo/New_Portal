import React from 'react'

import { Grid, Grid2, Card, CardMedia, CardContent, Typography } from '@mui/material'
import { NewsCardsType } from '../utils/Types'
import { Link } from 'react-router-dom'

function NewsCard({ news }: { news: NewsCardsType }) {
    return (
        <Link to={news.url}>
            <Card className="relative h-[400px] shadow-none border-2">
                <CardMedia
                    component="img"
                    className="h-[180px] aspect-[16/9] object-cover"
                    image={news.urlToImage}
                />
                <CardContent>
                    <Typography sx={{ fontSize: { xs: "16px", sm: "17px", md: "18px" } }}
                        gutterBottom className="leading-6 line-clamp-3">
                        {news.title}
                    </Typography>
                    <Typography variant="body2" className="line-clamp-4" sx={{ color: 'text.secondary', fontSize: { xs: "14px", sm: "15px", md: "16px" } }}>
                        {news.description}
                    </Typography>
                    <Typography className="absolute bottom-1 w-[90%] flex justify-between">
                        <h2 className="w-[150px] truncate">{news.source.name}</h2>
                        <h3>{new Date(news.publishedAt).toLocaleDateString()}</h3>
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    )
}

export default NewsCard