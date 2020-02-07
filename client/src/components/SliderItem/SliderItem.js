import React from 'react'
import './_SliderItem.scss'

const SliderItem = ({ image, text, handleClick, ...props }) => (
    <>
        <button className="horizontal-slider-button" onClick={handleClick}>
            {image}
            <p className="avatar-text">{text}</p>
        </button>
    </>
)

export default SliderItem