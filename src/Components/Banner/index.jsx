import React from 'react'
import BannerSearch from './BannerSearch'
import BannerText from './BannerText'

export default function Banner() {
    return (
        <div className="banner">
            <BannerText />
            <BannerSearch />
        </div>
    )
}
