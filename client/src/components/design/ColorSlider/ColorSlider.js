import React from 'react'
import SliderItem from '../SliderItem/SliderItem'

import useStateValue from '../../../lib/hooks/useStateValue'
import colorOptions from '../../../lib/colorOptions'

const ColorSlider = ({ colorType, ...props }) => {

    const [, dispatch] = useStateValue()

    return (
        <>
            {colorOptions.map(elem => {
                return (
                    <SliderItem
                        key={elem.colorName}
                        image={<div className=" avatar color" style={{ backgroundColor: elem.hexCode }}></div>}
                        text={elem.colorName}
                        handleClick={colorType === "primary" ? () => dispatch({
                            type: "PRIMARY_COLOR_SELECT",
                            primaryColor: elem.hexCode
                        })
                            : colorType === "secondary" ? () => dispatch({
                                type: "SECONDARY_COLOR_SELECT",
                                secondaryColor: elem.hexCode
                            })
                                : colorType === "tertiary" ? () => dispatch({
                                    type: "TERTIARY_COLOR_SELECT",
                                    tertiaryColor: elem.hexCode
                                })
                                    : console.error('There is an issue with the way handleClick is happening in <ColorSlider />.')
                        }
                    />
                )
            })}
        </>
    )
}

export default ColorSlider