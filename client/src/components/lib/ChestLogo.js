import React from 'react'
import useStateValue from '../../lib/hooks/useStateValue'

const ChestLogo = ({ className, avatarImage, fontSize, shadow, ...props }) => {

    const [{ chestLogo, secondaryColor, tertiaryColor }] = useStateValue()

    return (
        <>
            <svg className={className} style={{ width: avatarImage ? "100%" : "" }} viewBox="0 0 73 60" fill="none" role="img" >
                <text x="49.5%" y={avatarImage ? "50%" : "33%"} dominantBaseline="middle" textAnchor="middle"
                    style={{
                        fill: secondaryColor,
                        textShadow: avatarImage ? `.05em .05em black, -.05em .05em black, .05em -.05em black, -.05em -.05em black` : chestLogo.shadow ? `.4em .4em black, -.4em .4em black, .4em -.4em black, -.4em -.4em black` : null,
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
                        strokeWidth: chestLogo.outline ? ".1em" : chestLogo.fontFamily === "Ewert" ? 0 : 0,
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