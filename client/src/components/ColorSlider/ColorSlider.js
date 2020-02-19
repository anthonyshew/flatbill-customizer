import React from 'react'
import SliderItem from '../SliderItem/SliderItem'

import useStateValue from '../../lib/hooks/useStateValue'

const ColorSlider = ({ colorType, ...props }) => {

    const [, dispatch] = useStateValue()

    const colorOptions = [{
        colorName: "Black",
        hexCode: "#000000",
    },
    {
        colorName: "White",
        hexCode: "#ffffff",
    },
    {
        colorName: "Cool Gray",
        hexCode: "#969799",
    },
    {
        colorName: "Charcoal",
        hexCode: "#56555b",
    },
    {
        colorName: "Maroon",
        hexCode: "#960001",
    },
    {
        colorName: "Red",
        hexCode: "#fe0000",
    },
    {
        colorName: "Deep Orange",
        hexCode: "#ff5517",
    },
    {
        colorName: "Bright Orange",
        hexCode: "#ff8500",
    },
    {
        colorName: "Light Orange",
        hexCode: "#ffcf9e",
    },
    {
        colorName: "Gold",
        hexCode: "#c99600",
    },
    {
        colorName: "Vegas Gold",
        hexCode: "#c0b460",
    },
    {
        colorName: "Gold Yellow",
        hexCode: "#ffe001",
    },
    {
        colorName: "Yellow",
        hexCode: "#ffff01",
    },
    {
        colorName: "Neon Green",
        hexCode: "#76bc1e",
    },
    {
        colorName: "Green",
        hexCode: "#008100",
    },
    {
        colorName: "Hunter Green",
        hexCode: "#195533",
    },
    {
        colorName: "Teal",
        hexCode: "#008081",
    },
    {
        colorName: "Dark Navy",
        hexCode: "#001f4e",
    },
    {
        colorName: "Navy",
        hexCode: "#10284c",
    },
    {
        colorName: "Rampage Blue",
        hexCode: "#1d4e90",
    },
    {
        colorName: "Blue",
        hexCode: "#0000fe",
    },
    {
        colorName: "Royal Blue",
        hexCode: "#1d68e5",
    },
    {
        colorName: "Carolina Blue",
        hexCode: "#8abade",
    },
    {
        colorName: "Columbia Blue",
        hexCode: "#75defe",
    },
    {
        colorName: "Purple",
        hexCode: "#960085",
    },
    {
        colorName: "Dark Purple",
        hexCode: "#4d225a",
    },
    {
        colorName: "Pink",
        hexCode: "#fe187b",
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