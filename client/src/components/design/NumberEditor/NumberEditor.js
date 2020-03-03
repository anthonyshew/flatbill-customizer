import React from 'react'
import SliderItem from '../SliderItem/SliderItem'

import useStateValue from '../../../lib/hooks/useStateValue'
import SVG from '../../SVG'
import NumberDisplay from '../lib/NumberDisplay'

const NumberEditor = ({ logoLocation, ...props }) => {

    const [{ number }, dispatch] = useStateValue()
    return (
        <>
            <SliderItem
                image={
                    <SVG name="decrease-font-size" className="avatar" />
                }
                text="Decrease Font Size"
                handleClick={() => dispatch({ type: "NUMBER_SIZE_DOWN" })}
            />
            <SliderItem
                image={<SVG name="increase-font-size" className="avatar" />}
                text="Increase Font Size"
                handleClick={() => dispatch({ type: "NUMBER_SIZE_UP" })}
            />
            <SliderItem
                image={<NumberDisplay avatarImage className="avatar jersey-text" fontSize="32px" />}
                text="Select Font"
                handleClick={() => dispatch({ type: "EDITOR_CHANGE", menu: "fontPickerNumber" })}
            />
            <SliderItem
                image={number.outline ? <SVG name="check-mark" className="avatar" /> : <SVG name="prohibit" className="avatar" />}
                text="Toggle Outline"
                handleClick={() => dispatch({ type: "TOGGLE_NUMBER_OUTLINE" })}
            />
            <SliderItem
                image={number.shadow ? <SVG name="check-mark" className="avatar" /> : <SVG name="prohibit" className="avatar" />}
                text="Toggle Shadow"
                handleClick={() => dispatch({ type: "TOGGLE_NUMBER_SHADOW" })}
            />
        </>
    )
}

export default NumberEditor