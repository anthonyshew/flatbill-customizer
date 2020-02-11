import React from 'react'
import useStateValue from '../../lib/hooks/useStateValue'

const ChestLogo = ({ className, avatarImage, fontSize, ...props }) => {

    const [{ chestLogo, primaryColor, secondaryColor, tertiaryColor }] = useStateValue()

    return (
        <>
            <svg className={className} style={{ width: avatarImage ? "100%" : "" }} viewBox="0 0 73 60" fill="none" role="img" >
                <text x="50%" y={avatarImage ? "50%" : "33%"} dominantBaseline="middle" textAnchor="middle"
                    style={{
                        fill: secondaryColor,
                        stroke: chestLogo.fontFamily === "Ewert" ? "" : tertiaryColor,
                        strokeWidth: chestLogo.outline ? .2 : chestLogo.fontFamily === "Ewert" ? 0 : 0,
                        textShadow: chestLogo.shadow ? `5px 5px black` : null,
                        fontFamily: chestLogo.fontFamily,
                        fontSize: fontSize || chestLogo.fontSize,
                        fontWeight: "900",
                        borderRadius: "initial"
                    }}>
                    {chestLogo.text}
                </text>
            </svg>
            {/* <p
                className="chest-logo"
                style={{
                    maxWidth: "150px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    padding: "1px",
                    fontFamily: chestLogo.fontFamily,
                    fontSize: chestLogo.fontSize + "px",
                    color: tertiaryColor
                }}>
                {chestLogo.text}
            </p> */}
        </>
    )
}

export default ChestLogo