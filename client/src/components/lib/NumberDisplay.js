import React from 'react'
import useStateValue from '../../lib/hooks/useStateValue'

const NumberDisplay = ({ className, avatarImage, fontSize, display, ...props }) => {

    const [{ number, secondaryColor, tertiaryColor }] = useStateValue()

    return (
        <>
            <svg className={className} style={{ width: avatarImage ? "100%" : "" }} viewBox="0 0 73 60" fill="none" role="img" >
                <text x={display ? "50%" : avatarImage ? "50%" : "40%"} y={display ? "40%" : avatarImage ? "50%" : "70%"} dominantBaseline="middle" textAnchor="middle"
                    style={{
                        fill: secondaryColor,
                        stroke: number.fontFamily === "Ewert" ? "" : tertiaryColor,
                        strokeWidth: number.outline ? ".000005em" : number.fontFamily === "Ewert" ? 0 : 0,
                        textShadow: number.shadow ? `4px 4px black` : null,
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