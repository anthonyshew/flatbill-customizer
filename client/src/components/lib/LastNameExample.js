import React from 'react'
import useStateValue from '../../lib/hooks/useStateValue'

const LastNameExample = ({ className, avatarImage, fontSize, shadow, ...props }) => {

    const [{ chestLogo, secondaryColor, tertiaryColor }] = useStateValue()

    return (
        <>
            <svg className={className} style={{ width: avatarImage ? "100%" : "" }} viewBox="0 0 73 60" fill="none" role="img" >
                <text x="50%" y="16%" dominantBaseline="middle" textAnchor="middle"
                    style={{
                        fill: secondaryColor,
                        stroke: chestLogo.fontFamily === "Ewert" ? "" : tertiaryColor,
                        strokeWidth: chestLogo.outline ? ".01em" : chestLogo.fontFamily === "Ewert" ? 0 : 0,
                        textShadow: chestLogo.shadow && shadow ? `.4em .4em black, -.4em .4em black, .4em -.4em black, -.4em -.4em black` : null,
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