import React from 'react'
import './HeroStyles.css'

import Video from '../../assets/sunrisevideo.mp4'

function Hero() {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <div className="content">
                <h1>Raise Awareness About Invisible Disabilities In School and Educational Environment</h1>
                </div>
        </div>
    )
}

export default Hero