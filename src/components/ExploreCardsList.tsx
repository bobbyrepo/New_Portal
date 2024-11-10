import React from 'react'

import NewsCard from './NewsCard'
import { NewsCardsType } from '../utils/Types'

function ExploreCardsList({ list }: { list?: NewsCardsType[] }) {
    return (
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 md:w-full w-[95%] mx-auto">
            {list?.map((item) => (
                <div key={item.title} className="inline-block">
                    <NewsCard news={item} />
                </div>
            ))}
        </div>)
}

export default ExploreCardsList