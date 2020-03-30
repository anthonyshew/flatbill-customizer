import React from 'react'
import useStateValue from '../../../lib/hooks/useStateValue'

const ChestLogo = ({ className, avatarImage, fontSize, shadow, receiptProduct, ...props }) => {

    const [{ chestLogo: stateChestLogo, secondaryColor: stateSecondaryColor, tertiaryColor: stateTertiaryColor }] = useStateValue()

    const receiptSecondaryColor = receiptProduct ? receiptProduct.secondaryColor : null
    const receiptTertiaryColor = receiptProduct ? receiptProduct.tertiaryColor : null
    const receiptChestLogo = receiptProduct ? receiptProduct.chestLogo : null


    const secondaryColor = receiptSecondaryColor ?? stateSecondaryColor
    const tertiaryColor = receiptTertiaryColor ?? stateTertiaryColor
    const chestLogo = receiptChestLogo ?? stateChestLogo

    return (
        <>
            <svg className={className} style={{ width: avatarImage ? "100%" : "" }} viewBox={avatarImage ? "0 0 75 75" : "0 0 250 250"} fill="none" role="img" >
                <text x="50%" y={avatarImage ? "50%" : "37%"} dominantBaseline="middle" textAnchor="middle"
                    style={{
                        fill: secondaryColor,
                        stroke: "black",
                        strokeWidth: chestLogo.shadow ? "6px" : 0,
                        fontFamily: chestLogo.fontFamily,
                        fontSize: fontSize || chestLogo.fontSize,
                        fontWeight: "900",
                        borderRadius: "initial"
                    }}>
                    {chestLogo.text}
                </text>
                <text x="50%" y={avatarImage ? "50%" : "37%"} dominantBaseline="middle" textAnchor="middle"
                    style={{
                        fill: secondaryColor,
                        stroke: tertiaryColor,
                        strokeWidth: chestLogo.outline ? "2px" : 0,
                        fontFamily: chestLogo.fontFamily,
                        fontSize: fontSize || chestLogo.fontSize,
                        fontWeight: "900",
                        borderRadius: "initial"
                    }}>
                    {chestLogo.text}
                </text>
                <text x="50%" y={avatarImage ? "50%" : "37%"} dominantBaseline="middle" textAnchor="middle"
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