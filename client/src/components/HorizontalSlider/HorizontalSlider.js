import React from 'react'
import './_HorizontalSlider.scss'
import useStateValue from '../../lib/hooks/useStateValue'

import SVG from '../SVG/SVG'

const HorizontalSlider = ({ ...props }) => {

    const [{ model,
        primaryColor,
        secondaryColor,
        tertiaryColor,
        chestLogo,
        leftArmLogo,
        rightArmLogo,
        editorCurrentlyOpen }, dispatch] = useStateValue()

    const sliderOptions = {
        defaultMenu: [{
            image: <SVG className="avatar" name={`${model}-front`} />,
            text: 'Model',
            clickHandler: () => dispatch({ type: "EDITOR_CHANGE", menu: 'models' })
        },
        {
            image: <div className=" avatar color primary-color" style={{ backgroundColor: primaryColor }}></div>,
            text: 'Primary Color',
            clickHandler: () => console.log('default menu click')
        },
        {
            image: <div className=" avatar color primary-color" style={{ backgroundColor: secondaryColor }}></div>,
            text: 'Secondary Color',
            clickHandler: () => console.log('default menu click')
        },
        {
            image: <div className=" avatar color primary-color" style={{ backgroundColor: tertiaryColor }}></div>,
            text: 'Tertiary Color',
            clickHandler: () => console.log('default menu click')
        },
        {
            image: <SVG className="avatar" name={chestLogo} title={'shut'} alt={'up'} desc={'thanks'} />,
            text: 'Logo',
            clickHandler: () => console.log('default menu click')
        },
        {
            image: <SVG className="avatar " name={leftArmLogo} title={'shut'} alt={'up'} desc={'thanks'} />,
            text: 'Left Arm Logo',
            clickHandler: () => console.log('default menu click')
        },
        {
            image: <SVG className="avatar" name={rightArmLogo} title={'shut'} alt={'up'} desc={'thanks'} />,
            text: 'Right Arm Logo',
            clickHandler: () => console.log('default menu click')
        }],
        models: [{
            image: <SVG className="avatar" name={`striper-front`} />,
            text: 'Striper',
            clickHandler: () => console.log('model click')
        },
        {
            image: <SVG className="avatar" name={`solid-front`} />,
            text: 'Striper',
            clickHandler: () => console.log('model click')
        }]
    }

    return (
        <ul className="horizontal-slider">
            {
                sliderOptions[editorCurrentlyOpen].map(elem => {
                    return (
                        <SliderItem
                            key={elem.text}
                            image={elem.image}
                            text={elem.text}
                            handleClick={elem.clickHandler}
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