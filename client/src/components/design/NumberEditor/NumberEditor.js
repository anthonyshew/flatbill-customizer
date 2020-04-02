import React from 'react'
import './_NumberEditor.scss'
import SliderItem from '../SliderItem/SliderItem'

import useStateValue from '../../../lib/hooks/useStateValue'
import SVG from '../../SVG'
import NumberDisplay from '../lib/NumberDisplay'

const NumberEditor = ({ logoLocation, ...props }) => {

    const [{ number }, dispatch] = useStateValue()
    return (
        <>
            <label className="container-input-display-number">
                <input
                    name="input-number"
                    type="number"
                    className="input-display-number"
                    value={number.digit}
                    onChange={(e) => {
                        if (e.target.value >= 0 && e.target.value <= 99) {
                            dispatch({ type: "CHANGE_DISPLAY_NUMBER", number: e.target.value })
                        } else {
                            if (e.target.value < 0) {
                                e.target.value = 0
                                dispatch({ type: "CHANGE_DISPLAY_NUMBER", number: 0 })
                            }

                            if (e.target.value > 99) {
                                e.target.value = 99
                                dispatch({ type: "CHANGE_DISPLAY_NUMBER", number: 99 })
                            }
                        }
                    }}
                />
                Display Number
            </label>
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
            <SliderItem
                image={number.shadowBlack ? <SVG name="check-mark" className="avatar" /> : <SVG name="prohibit" className="avatar" />}
                text="Use Black Shadow"
                handleClick={() => dispatch({ type: "TOGGLE_NUMBER_SHADOW_BLACK" })}
            />
        </>
    )
}

export default NumberEditor