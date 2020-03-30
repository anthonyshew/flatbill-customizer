import React from 'react'
import useStateValue from '../../../lib/hooks/useStateValue'

const Numberback = ({ className, avatarImage, fontSize, back, receiptProduct, ...props }) => {

    const [{ number: stateNumber, secondaryColor: stateSecondaryColor, tertiaryColor: stateTertiaryColor }] = useStateValue()

    const receiptSecondaryColor = receiptProduct ? receiptProduct.secondaryColor : null
    const receiptTertiaryColor = receiptProduct ? receiptProduct.tertiaryColor : null
    const receiptNumber = receiptProduct ? receiptProduct.number : null

    const secondaryColor = receiptSecondaryColor ?? stateSecondaryColor
    const tertiaryColor = receiptTertiaryColor ?? stateTertiaryColor
    const number = receiptNumber ?? stateNumber

    return (
        <>
            <svg className={className} style={{ width: avatarImage ? "100%" : "" }} viewBox={avatarImage ? "0 0 75 75" : "0 0 250 250"} fill="none" role="img" >
                <text x={back ? "50%" : avatarImage ? "50%" : "33%"} y={back ? "42%" : avatarImage ? "50%" : "50%"} dominantBaseline="middle" textAnchor="middle"
                    style={{
                        fill: secondaryColor,
                        stroke: "black",
                        strokeWidth: number.shadow && className === "jersey-number-back" ? "12px" : number.shadow ? "8px" : 0,
                        fontFamily: number.fontFamily,
                        fontSize: fontSize || number.fontSize,
                        fontWeight: "900",
                        borderRadius: "initial"
                    }}>
                    {number.digit}
                </text>
                <text x={back ? "50%" : avatarImage ? "50%" : "33%"} y={back ? "42%" : avatarImage ? "50%" : "50%"} dominantBaseline="middle" textAnchor="middle"
                    style={{
                        fill: secondaryColor,
                        stroke: tertiaryColor,
                        strokeWidth: number.outline && className === "jersey-number-back" ? "4px" : number.outline ? "2px" : 0,
                        fontFamily: number.fontFamily,
                        fontSize: fontSize || number.fontSize,
                        fontWeight: "900",
                        borderRadius: "initial"
                    }}>
                    {number.digit}
                </text>
                <text x={back ? "50%" : avatarImage ? "50%" : "33%"} y={back ? "42%" : avatarImage ? "50%" : "50%"} dominantBaseline="middle" textAnchor="middle"
                    style={{
                        fill: secondaryColor,
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

export default Numberback