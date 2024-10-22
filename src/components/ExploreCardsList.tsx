import React from 'react'

import NewsCard from './NewsCard'
import { NewsCardsType } from '../utils/Types'

function ExploreCardsList({ list }: { list?: NewsCardsType[] }) {
    return (
        <div className="grid grid-cols-5 gap-3">
            {list?.map((item) => (
                <div key={item.title} className="inline-block">
                    <NewsCard news={item} />
                </div>
            ))}
        </div>)
}

export default ExploreCardsList