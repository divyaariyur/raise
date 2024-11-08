import React from 'react'
import './SelectsImgStyles.css'

function SelectsImg({bgImg, text}) {
    return (
        <div className='selectindex-location'>
            <img src={bgImg} alt={text} />
             
            <div className="overlay">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default SelectsImg