import React from 'react'
import useStateValue from '../../lib/hooks/useStateValue'

const ChestLogo = ({ className, avatarImage, fontSize, shadow, ...props }) => {

    const [{ chestLogo, secondaryColor, tertiaryColor }] = useStateValue()

    return (
        <>
            <svg className={className} style={{ width: avatarImage ? "100%" : "" }} viewBox={avatarImage ? "0 0 75 75" : "0 0 250 250"} fill="none" role="img" >
                <text x="49.5%" y={avatarImage ? "50%" : "33%"} dominantBaseline="middle" textAnchor="middle"
                    style={{
                        fill: secondaryColor,
                        stroke: chestLogo.fontFamily === "Ewert" ? "" : "black",
                        strokeWidth: chestLogo.shadow ? "8px" : chestLogo.fontFamily === "Ewert" ? 0 : 0,
                        fontFamily: chestLogo.fontFamily,
                        fontSize: fontSize || chestLogo.fontSize,
                        fontWeight: "900",
                        borderRadius: "initial"
                    }}>
                    {chestLogo.text}
                </text>
                <text x="49.5%" y={avatarImage ? "50%" : "33%"} dominantBaseline="middle" textAnchor="middle"
                    style={{
                        fill: secondaryColor,
                        stroke: chestLogo.fontFamily === "Ewert" ? "" : tertiaryColor,
                        strokeWidth: chestLogo.outline ? "2px" : chestLogo.fontFamily === "Ewert" ? 0 : 0,
                        fontFamily: chestLogo.fontFamily,
                        fontSize: fontSize || chestLogo.fontSize,
                        fontWeight: "900",
                        borderRadius: "initial"
                    }}>
                    {chestLogo.text}
                </text>
                <text x="49.5%" y={avatarImage ? "50%" : "33%"} dominantBaseline="middle" textAnchor="middle"
                    style={{
                        fill: secondaryColor,
                        fontFamily: chestLogo.fontFamily,
                        fontSize: fontSize || chestLogo.fontSize,
                        fontWeight: "900",
                        borderRadius: "initial"
                    }}>
                    {chestLogo.text}
                </text>
            </svg>
        </>
    )
}

export default ChestLogo