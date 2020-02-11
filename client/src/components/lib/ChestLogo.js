import React from 'react'
import useStateValue from '../../lib/hooks/useStateValue'

const ChestLogo = ({ className, avatarImage, fontSize, ...props }) => {

    const [{ chestLogo, secondaryColor, tertiaryColor }] = useStateValue()

    return (
        <>
            <svg className={className} style={{ width: avatarImage ? "100%" : "" }} viewBox="0 0 73 60" fill="none" role="img" >
                <text x="50%" y={avatarImage ? "50%" : "33%"} dominantBaseline="middle" textAnchor="middle"
                    style={{
                        fill: secondaryColor,
                        stroke: tertiaryColor,
                        strokeWidth: chestLogo.outline ? .3 : 0,
                        fontFamily: chestLogo.fontFamily,
                        fontSize: fontSize || chestLogo.fontSize,
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