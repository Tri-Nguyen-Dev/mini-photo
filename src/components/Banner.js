import React from 'react'
import '../styles/Banner.scss'


function Banner({ imageBg, title }) {
    const style = imageBg ? {
        backgroundImage: `url(${imageBg})`
    } : {}
    return (
        <div className="banner" style={style}>
            <h1 className="banner__title">{title}</h1>
        </div>
    )
}

export default Banner
