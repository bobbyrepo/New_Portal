import React, { useEffect, useState } from 'react'

import { getTopHeadlines } from '../utils/api'
import { Grid2, Card, CardMedia, CardContent, Typography, Container } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { NewsCardsType } from '../utils/Types'

import HeaderSection from '../components/HeaderSection';
import Carousel from '../components/Carousel'
import HomeCardsList from '../components/HomeCardsList';

function Home() {

    return (
        <div className='w-[90%] mx-auto'>

            <HeaderSection title="Top Head Lines">
                <Carousel />
            </HeaderSection>

            <HeaderSection title="Business">
                <HomeCardsList category="business" />
            </HeaderSection>

            <HeaderSection title="Entertainment">
                <HomeCardsList category="Entertainment" />
            </HeaderSection>

            <HeaderSection title="Health">
                <HomeCardsList category="Health" />
            </HeaderSection>

            <HeaderSection title="Science">
                <HomeCardsList category="Science" />
            </HeaderSection>

            <HeaderSection title="Sport">
                <HomeCardsList category="Sport" />
            </HeaderSection>

            <HeaderSection title="Technology">
                <HomeCardsList category="Technology" />
            </HeaderSection>

        </div>
    )
}

export default Home


//     < Grid2 container spacing = { 2} mt = { 4} mb = { 8} >
//     {
//         topHeadlines.map((item) =>
//             <Grid2 size={2.4} >
//                 <Card className="relative h-[400px] shadow-none border-2">
//                     <CardMedia
//                         component="img"
//                         className='w-full aspect-[16/10] object-cover'
//                         image={item.urlToImage}
//                     />
//                     <CardContent >
//                         <Typography gutterBottom className='text-[18px] leading-6 line-clamp-3'>
//                             {item.title}
//                         </Typography>
//                         <Typography variant="body2" className='line-clamp-4' sx={{ color: 'text.secondary' }}>
//                             {item.description}
//                         </Typography>

//                         <Typography variant="body2" className="absolute bottom-1 w-[90%] flex justify-between">
//                             <h2 className='w-[150px] truncate'>{item.source.name}</h2>
//                             <h3>{new Date(item.publishedAt).toLocaleDateString()}</h3> {/* Format date */}
//                         </Typography>
//                     </CardContent>
//                 </Card>
//             </Grid2>
//         )
//     }
// </ >