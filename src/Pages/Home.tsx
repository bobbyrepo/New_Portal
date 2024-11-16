import React, { FC } from 'react'
import { Container, Box } from '@mui/material'
import HeaderSection from '../components/HeaderSection'
import Carousel from '../components/Carousel'
import HomeCardsList from '../components/HomeCardsList'
import { categories } from '../utils/constant'

const Home: FC = () => {
    return (
        <Container
            maxWidth={false}
            sx={{ width: "90%", mb: 5 }}
        >
            <HeaderSection title="Top Headlines">
                <Carousel />
            </HeaderSection>

            <Box mt={4}>
                {categories.map((item: string, ind: number) => (
                    <HeaderSection key={ind} title={item}>
                        <HomeCardsList category={item} />
                    </HeaderSection>
                ))}
            </Box>
        </Container>
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