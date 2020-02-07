import React from 'react'
import SliderItem from '../SliderItem/SliderItem'

import useStateValue from '../../lib/hooks/useStateValue'

const ColorSlider = ({ colorType, ...props }) => {

    const [, dispatch] = useStateValue()

    const colorOptions = [{
        colorName: "Red",
        hexCode: "red",
    },
    {
        colorName: "orange",
        hexCode: "orange",
    },
    {
        colorName: "yellow",
        hexCode: "yellow",
    },
    {
        colorName: "green",
        hexCode: "green",
    },
    {
        colorName: "blue",
        hexCode: "blue",
    },
    {
        colorName: "purple",
        hexCode: "purple",
    },
    {
        colorName: "white",
        hexCode: "white",
    },
    {
        colorName: "black",
        hexCode: "black",
    }]

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
                            menu: 'defaultMenu',
                            primaryColor: elem.hexCode
                        })
                            : colorType === "secondary" ? () => dispatch({
                                type: "SECONDARY_COLOR_SELECT",
                                menu: 'defaultMenu',
                                secondaryColor: elem.hexCode
                            })
                                : colorType === "tertiary" ? () => dispatch({
                                    type: "TERTIARY_COLOR_SELECT",
                                    menu: 'defaultMenu',
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