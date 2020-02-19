import React from 'react'
import SliderItem from '../SliderItem'

import useStateValue from '../../lib/hooks/useStateValue'
import SVG from '../SVG'
import ChestLogo from '../lib/ChestLogo'

const LogoEditor = ({ logoLocation, ...props }) => {

    const [{ chestLogo }, dispatch] = useStateValue()
    return (
        <>
            <SliderItem
                image={
                    <SVG name="decrease-font-size" className="avatar" />
                }
                text="Decrease Font Size"
                handleClick={() => dispatch({ type: "FONT_SIZE_DOWN" })}
            />
            <SliderItem
                image={<SVG name="increase-font-size" className="avatar" />}
                text="Increase Font Size"
                handleClick={() => dispatch({ type: "FONT_SIZE_UP" })}
            />
            <SliderItem
                image={<ChestLogo avatarImage className="avatar jersey-text" fontSize="32px" />}
                text="Select Font"
                handleClick={() => dispatch({ type: "EDITOR_CHANGE", menu: "fontPickerChest" })}
            />
            <SliderItem
                image={chestLogo.outline ? <SVG name="check-mark" className="avatar" /> : <SVG name="prohibit" className="avatar" />}
                text="Toggle Outline"
                handleClick={() => dispatch({ type: "TOGGLE_CHEST_OUTLINE" })}
            />
            <SliderItem
                image={chestLogo.shadow ? <SVG name="check-mark" className="avatar" /> : <SVG name="prohibit" className="avatar" />}
                text="Toggle Shadow"
                handleClick={() => dispatch({ type: "TOGGLE_CHEST_SHADOW" })}
            />
        </>
    )
}

export default LogoEditor