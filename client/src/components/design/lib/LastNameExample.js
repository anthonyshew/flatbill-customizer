import React from 'react'
import useStateValue from '../../../lib/hooks/useStateValue'

const LastNameExample = ({ className, avatarImage, fontSize, shadow, receiptProduct, ...props }) => {

    const [{ chestLogo: stateChestLogo, secondaryColor: stateSecondaryColor, tertiaryColor: stateTertiaryColor }] = useStateValue()

    const receiptSecondaryColor = receiptProduct ? receiptProduct.secondaryColor : null
    const receiptTertiaryColor = receiptProduct ? receiptProduct.tertiaryColor : null
    const receiptChestLogo = receiptProduct ? receiptProduct.chestLogo : null


    const secondaryColor = receiptSecondaryColor ?? stateSecondaryColor
    const tertiaryColor = receiptTertiaryColor ?? stateTertiaryColor
    const chestLogo = receiptChestLogo ?? stateChestLogo

    return (
        <>
            <svg className={className} style={{ width: avatarImage ? "100%" : "" }} viewBox="0 0 200 200" fill="none" role="img" >
                <text x="50%" y="18%" dominantBaseline="middle" textAnchor="middle"
                    style={{
                        fill: secondaryColor,
                        stroke: "black",
                        strokeWidth: chestLogo.shadow ? "8px" : 0,
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
                        stroke: tertiaryColor,
                        strokeWidth: chestLogo.outline ? "2px" : 0,
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