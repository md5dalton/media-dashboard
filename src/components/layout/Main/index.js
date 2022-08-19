import React from 'react'
import CardList from '../../UI/CardList'
import { SmallCard, LargeCard } from '../../UI/Card'

import './styles.sass'

const users = [
    {
        username: "@nathanf",
        followers: 1987,
        change: 12,
        platform: "facebook"
    },
    {
        username: "@nathanf",
        followers: 1044,
        change: 99,
        platform: "twitter"
    },
    {
        username: "@realnathanf",
        followers: "11k",
        change: 1099,
        platform: "instagram"
    },
    {
        username: "Nathan F",
        followers: 8239,
        change: -144,
        platform: "youtube"
    }
]

const overview = [
    {
        param: "page views",
        platform: "facebook",
        count: 87,
        change: 3
    },
    {
        param: "likes",
        platform: "facebook",
        count: 52,
        change: -2
    },
    {
        param: "likes",
        platform: "instagram",
        count: 5462,
        change: 2257
    },
    {
        param: "profile views",
        platform: "instagram",
        count: "52k",
        change: 1375
    },
    {
        param: "retweets",
        platform: "twitter",
        count: 117,
        change: 303
    },
    {
        param: "likes",
        platform: "twitter",
        count: 507,
        change: 553
    },
    {
        param: "likes",
        platform: "youtube",
        count: 107,
        change: -19
    },
    {
        param: "total views",
        platform: "youtube",
        count: 1407,
        change: -12
    }
]

export default () => (
    <main>
        <div className="users">
            <CardList items={users} itemHandler={(item, index) => <LargeCard key={index} {...item} />} />
        </div>
        <div className="overview">
            <h2>Overview - Today</h2>
            <CardList items={overview} itemHandler={(item, index) => <SmallCard key={index} {...item} />} />
        </div>
    </main>
)