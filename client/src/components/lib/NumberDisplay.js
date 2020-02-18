import React from 'react'
import useStateValue from '../../lib/hooks/useStateValue'

const NumberDisplay = ({ className, avatarImage, fontSize, display, ...props }) => {

    const [{ number, secondaryColor, tertiaryColor }] = useStateValue()

    return (
        <>
            <svg className={className} style={{ width: avatarImage ? "100%" : "" }} viewBox={avatarImage ? "0 0 75 75" : "0 0 250 250"} fill="none" role="img" >
                <text x={display ? "50%" : avatarImage ? "50%" : "37%"} y={display ? "45%" : avatarImage ? "50%" : "70%"} dominantBaseline="middle" textAnchor="middle"
                    style={{
                        fill: secondaryColor,
                        stroke: number.fontFamily === "Ewert" ? "" : "black",
                        strokeWidth: number.shadow && className === "jersey-number-back" ? "12px" : number.shadow ? "8px" : number.fontFamily === "Ewert" ? 0 : 0,
                        fontFamily: number.fontFamily,
                        fontSize: fontSize || number.fontSize,
                        fontWeight: "900",
                        borderRadius: "initial"
                    }}>
                    {number.digit}
                </text>
                <text x={display ? "50%" : avatarImage ? "50%" : "37%"} y={display ? "45%" : avatarImage ? "50%" : "70%"} dominantBaseline="middle" textAnchor="middle"
                    style={{
                        fill: secondaryColor,
                        stroke: number.fontFamily === "Ewert" ? "" : tertiaryColor,
                        strokeWidth: number.outline && className === "jersey-number-back" ? "4px" : number.outline ? "2px" : number.fontFamily === "Ewert" ? 0 : 0,
                        fontFamily: number.fontFamily,
                        fontSize: fontSize || number.fontSize,
                        fontWeight: "900",
                        borderRadius: "initial"
                    }}>
                    {number.digit}
                </text>
                <text x={display ? "50%" : avatarImage ? "50%" : "37%"} y={display ? "45%" : avatarImage ? "50%" : "70%"} dominantBaseline="middle" textAnchor="middle"
                    style={{
                        fill: secondaryColor,
                        fontFamily: number.fontFamily,
                        fontSize: fontSize || number.fontSize,
                        fontWeight: "900",
                        borderRadius: "initial"
                    }}>
                    {number.digit}
                </text>
            </svg>
        </>
    )
}

export default NumberDisplay