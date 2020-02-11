import React from 'react'
import SliderItem from '../SliderItem'

import useStateValue from '../../lib/hooks/useStateValue'
import SVG from '../SVG'

const LogoEditor = ({ logoLocation, ...props }) => {

    const [{ chestLogo, editorCurrentlyOpen }, dispatch] = useStateValue()
    return (
        <>
            <SliderItem
                image={
                    <SVG name="arrow-left" className="avatar" alt="Back to top menu." />
                }
                text="Back to Top Menu"
                handleClick={() => dispatch({ type: "EDITOR_CHANGE", menu: "defaultMenu" })}
            />
            <SliderItem
                image={
                    <SVG name="decrease-font-size" className="avatar" />
                }
                text="Decrease Font Size"
                handleClick={() => dispatch({ type: "FONT_SIZE_DOWN" })}
            />
            <SliderItem
                image={
                    <SVG name="increase-font-size" className="avatar" />
                }
                text="Increase Font Size"
                handleClick={() => dispatch({ type: "FONT_SIZE_UP" })}
            />
            <SliderItem
                image={
                    <SVG name="increase-font-size" className="avatar" />
                }
                text="Increase Font Size"
                handleClick={() => dispatch({ type: "FONT_SIZE_UP" })}
            />
        </>
    )
}

export default LogoEditor