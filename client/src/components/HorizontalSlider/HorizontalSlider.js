import React, { useState } from 'react'
import './_HorizontalSlider.scss'

import useStateValue from '../../lib/hooks/useStateValue'

import SVG from '../SVG/SVG'

const HorizontalSlider = ({ ...props }) => {

    const [{ model,
        primaryColor,
        secondaryColor,
        chestLogo,
        leftArmLogo,
        rightArmLogo }] = useStateValue()

    const [newStuff] = useState([{
        image: <SVG className="avatar" name={model} title={'shut'} alt={'up'} desc={'thanks'} />,
        text: 'Model'
    },
    {
        image: <div className=" avatar color primary-color" style={{ backgroundColor: primaryColor }}></div>,
        text: 'Primary Color'
    },
    {
        image: <div className=" avatar color primary-color" style={{ backgroundColor: secondaryColor }}></div>,
        text: 'Secondary Color'
    },
    {
        image: <SVG className="avatar" name={chestLogo} title={'shut'} alt={'up'} desc={'thanks'} />,
        text: 'Logo'
    },
    {
        image: <SVG className="avatar " name={leftArmLogo} title={'shut'} alt={'up'} desc={'thanks'} />,
        text: 'Left Arm Logo'
    },
    {
        image: <SVG className="avatar" name={rightArmLogo} title={'shut'} alt={'up'} desc={'thanks'} />,
        text: 'Right Arm Logo'
    }
    ])

    const handleClick = () => console.log('so handled right now')

    return (
        <ul className="horizontal-slider">

            {
                newStuff.map(elem => {
                    return (
                        <SliderItem
                            key={elem.text}
                            image={elem.image}
                            text={elem.text}
                            handleClick={handleClick}
                        />
                    )
                })
            }
        </ul>
    )
}

export default HorizontalSlider

const SliderItem = ({ image, text, handleClick, ...props }) => (
    <>
        <button className="horizontal-slider-button" onClick={handleClick}>
            {image}
            <p className="avatar-text">{text}</p>
        </button>
    </>
)