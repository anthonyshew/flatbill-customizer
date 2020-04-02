import React from 'react'
import useStateValue from '../../../lib/hooks/useStateValue'

const LastNameExample = ({ className, avatarImage, shadow, fontSize, receiptProduct, ...props }) => {

    const [{ chestLogo: stateChestLogo, primaryColor: statePrimaryColor, secondaryColor: stateSecondaryColor, tertiaryColor: stateTertiaryColor }] = useStateValue()

    const receiptPrimaryColor = receiptProduct ? receiptProduct.primaryColor : null
    const receiptSecondaryColor = receiptProduct ? receiptProduct.secondaryColor : null
    const receiptTertiaryColor = receiptProduct ? receiptProduct.tertiaryColor : null
    const receiptChestLogo = receiptProduct ? receiptProduct.chestLogo : null

    const primaryColor = receiptPrimaryColor ?? statePrimaryColor
    const secondaryColor = receiptSecondaryColor ?? stateSecondaryColor
    const tertiaryColor = receiptTertiaryColor ?? stateTertiaryColor
    const chestLogo = receiptChestLogo ?? stateChestLogo

    return (
        <>
            <svg className={className} style={{ width: avatarImage ? "100%" : "" }} viewBox={avatarImage ? "0 0 75 75" : "0 0 200 200"} fill="none" role="img" >
                <text x="50%" y={avatarImage ? "50%" : "16%"} dominantBaseline="middle" textAnchor="middle"
                    style={{
                        fill: secondaryColor,
                        stroke: chestLogo.shadowBlack ? "black" : tertiaryColor,
                        strokeWidth: chestLogo.shadow ? "8px" : 0,
                        fontFamily: chestLogo.fontFamily,
                        fontSize: fontSize,
                        fontWeight: "900",
                        borderRadius: "initial"
                    }}>
                    Jones
                </text>
                <text x="50%" y={avatarImage ? "50%" : "16%"} dominantBaseline="middle" textAnchor="middle"
                    style={{
                        fill: secondaryColor,
                        stroke: shadow && chestLogo.shadowBlack ? tertiaryColor : shadow ? primaryColor : tertiaryColor,
                        strokeWidth: chestLogo.outline ? "2px" : 0,
                        fontFamily: chestLogo.fontFamily,
                        fontSize: fontSize,
                        fontWeight: "900",
                        borderRadius: "initial"
                    }}>
                    Jones
                </text>
                <text x="50%" y={avatarImage ? "50%" : "16%"} dominantBaseline="middle" textAnchor="middle"
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