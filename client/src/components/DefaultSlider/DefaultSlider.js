import React from 'react'
import SliderItem from '../SliderItem/SliderItem'

import useStateValue from '../../lib/hooks/useStateValue'
import SVG from '../SVG'
import ChestLogo from '../lib/ChestLogo'

const DefaultSlider = ({ ...props }) => {

    const [{ model,
        primaryColor,
        secondaryColor,
        tertiaryColor,
        leftArmLogo,
        rightArmLogo }, dispatch] = useStateValue()

    const defaultMenu = [{
        image: <SVG className="avatar" name={`${model}-front`} />,
        text: 'Model',
        clickHandler: () => dispatch({ type: "EDITOR_CHANGE", menu: 'models' })
    },
    {
        image: <div className=" avatar color" style={{ backgroundColor: primaryColor }}></div>,
        text: 'Primary Color',
        clickHandler: () => dispatch({ type: "EDITOR_CHANGE", menu: 'primaryColor' })
    },
    {
        image: <div className=" avatar color" style={{ backgroundColor: secondaryColor }}></div>,
        text: 'Secondary Color',
        clickHandler: () => dispatch({ type: "EDITOR_CHANGE", menu: 'secondaryColor' })
    },
    {
        image: <div className=" avatar color" style={{ backgroundColor: tertiaryColor }}></div>,
        text: 'Tertiary Color',
        clickHandler: () => dispatch({ type: "EDITOR_CHANGE", menu: 'tertiaryColor' })
    },
    {
        image: <ChestLogo avatarImage className="avatar jersey-text" fontSize="32px" />,
        text: 'Chest Logo',
        clickHandler: () => dispatch({ type: "EDITOR_CHANGE", menu: 'chestLogo' })
    },
    {
        image: <p>Numbers Options</p>,
        text: 'Numbers',
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
    }]

    return (
        <>
            {
                defaultMenu.map(elem => {
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
        </>
    )
}

export default DefaultSlider