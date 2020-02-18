import React from 'react'
import useStateValue from '../../lib/hooks/useStateValue'

const LastNameExample = ({ className, avatarImage, fontSize, shadow, ...props }) => {

    const [{ chestLogo, secondaryColor, tertiaryColor }] = useStateValue()

    return (
        <>
            <svg className={className} style={{ width: avatarImage ? "100%" : "" }} viewBox="0 0 200 200" fill="none" role="img" >
                <text x="50%" y="18%" dominantBaseline="middle" textAnchor="middle"
                    style={{
                        fill: secondaryColor,
                        stroke: chestLogo.fontFamily === "Ewert" ? "" : "black",
                        strokeWidth: chestLogo.shadow ? "8px" : chestLogo.fontFamily === "Ewert" ? 0 : 0,
                        fontFamily: chestLogo.fontFamily,
                        fontSize: fontSize,
                        fontWeight: "900",
                        borderRadius: "initial"
                    }}>
                    Jones
                </text>
                <text x="50%" y="18%" dominantBaseline="middle" textAnchor="middle"
                    style={{
                        fill: secondaryColor,
                        stroke: chestLogo.fontFamily === "Ewert" ? "" : tertiaryColor,
                        strokeWidth: chestLogo.outline ? "2px" : chestLogo.fontFamily === "Ewert" ? 0 : 0,
                        fontFamily: chestLogo.fontFamily,
                        fontSize: fontSize,
                        fontWeight: "900",
                        borderRadius: "initial"
                    }}>
                    Jones
                </text>
                <text x="50%" y="18%" dominantBaseline="middle" textAnchor="middle"
                    style={{
                        fill: secondaryColor,
                        fontFamily: chestLogo.fontFamily,
                        fontSize: fontSize || chestLogo.fontSize,
                        fontWeight: "900",
                        borderRadius: "initial"
                    }}>
                    Jones
                </text>
            </svg>

        </>
    )
}

export default LastNameExample