import React, { useEffect, useState } from 'react'

import { Grid, Grid2 } from '@mui/material'

import { NewsCardsType } from '../utils/Types'
import { getByQuery } from '../utils/api'
import NewsCard from './NewsCard'

function HomeCardsList({ category }: { category: string }) {
    const [latest, setLatest] = useState<NewsCardsType[]>([])

    const fetchLatest = async (category: string, quantity: number) => {
        try {
            const response = await getByQuery(category, quantity)
            setLatest(response.data.articles.filter((res: NewsCardsType) => res.urlToImage != null))
        } catch (error) {
            console.log("Error Fetching Latest News", error)
        }
    }

    useEffect(() => {
        fetchLatest(category, 10)
    }, [])

    return (
        <div className="grid grid-cols-5 gap-3">
            {latest.slice(0, 5).map((item) => (
                <div key={item.title} className="inline-block">
                    <NewsCard news={item} />
                </div>
            ))}
        </div>
    );
}

export default HomeCardsList



//     < Grid2 container spacing = { 2} >
//     {
//         latest.map((item) =>
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
//                         </Typography >
//                     </CardContent >
//                 </Card >
//             </Grid2 >
//         )
//     }
// </ Grid2 > 