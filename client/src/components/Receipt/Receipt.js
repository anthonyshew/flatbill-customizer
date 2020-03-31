import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './_Receipt.scss'

import colorOptions from '../../lib/colorOptions'

import ProductDisplay from '../design/ProductDisplay'
import { Roster } from '../summary/Summary'

const Receipt = ({ ...props }) => {
    let { jwt } = useParams()

    const [data, setData] = useState("Loading...")

    useEffect(() => {
        fetch("/decode-receipt", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ jwt: jwt })
        })
            .then(res => res.json())
            .then(res => setData(res.data))
    }, [jwt])

    if (data === "Loading...") return <div></div>

    return (
        <div className="receipt">
            <h1>Your Custom Jersey Order</h1>
            <h2><span className="bold">Order Number:</span> {data.orderId}</h2>
            <div className="product-display-container">
                <ProductDisplay view="front" receiptProduct={{
                    model: data.model,
                    primaryColor: data.primaryColor,
                    secondaryColor: data.secondaryColor,
                    tertiaryColor: data.tertiaryColor,
                    chestLogo: data.chestLogo,
                    number: data.number,
                    leftArmLogo: data.leftArmLogo,
                    rightArmLogo: data.rightArmLogo
                }} />
                <ProductDisplay view="back" receiptProduct={{
                    model: data.model,
                    primaryColor: data.primaryColor,
                    secondaryColor: data.secondaryColor,
                    tertiaryColor: data.tertiaryColor,
                    chestLogo: data.chestLogo,
                    number: data.number,
                    leftArmLogo: data.leftArmLogo,
                    rightArmLogo: data.rightArmLogo
                }} />
            </div>
            <div className="design-attributes">
                <h3>Design Attributes</h3>
                <div className="attribute"><span className="bold">Model: </span><span>{data.model.charAt(0).toUpperCase() + data.model.slice(1)}</span></div>
                <div className="attribute"><span className="bold">Primary Color: </span><span>{colorOptions.filter(elem => Object.values(elem).includes(data.primaryColor))[0].colorName}</span></div>
                <div className="attribute"><span className="bold">Secondary Color: </span><span>{colorOptions.filter(elem => Object.values(elem).includes(data.secondaryColor))[0].colorName}</span></div>
                <div className="attribute"><span className="bold">Tertiary Color: </span><span>{colorOptions.filter(elem => Object.values(elem).includes(data.tertiaryColor))[0].colorName}</span></div>
                <div className="attribute"><span className="bold">Last Name On Back? </span><span>{data.lastName ? "Yes" : "No"}</span></div>
                <div className="attribute"><span className="bold">Chest Logo Text: </span><span>{data.chestLogo.text}</span></div>
                <div className="attribute"><span className="bold">Chest Logo Font: </span><span>{data.chestLogo.fontFamily}</span></div>
                <div className="attribute"><span className="bold">Chest Logo Outline? </span><span>{data.chestLogo.outline ? "Yes" : "No"}</span></div>
                <div className="attribute"><span className="bold">Chest Logo Shadow? </span><span>{data.chestLogo.shadow ? "Yes" : "No"}</span></div>
                <div className="attribute"><span className="bold">Number on Front? </span><span>{data.number.front ? "Yes" : "No"}</span></div>
                <div className="attribute"><span className="bold">Number Font: </span><span>{data.number.fontFamily}</span></div>
                <div className="attribute"><span className="bold">Number Outline? </span><span>{data.chestLogo.outline ? "Yes" : "No"}</span></div>
                <div className="attribute"><span className="bold">Number Shadow? </span><span>{data.chestLogo.shadow ? "Yes" : "No"}</span></div>
                <div className="attribute"><span className="bold">Left Arm Logo? </span><span>{data.leftArmLogo === "/media/platypus.png" ? "Platypus" : "None"}</span></div>
                <div className="attribute"><span className="bold">Right Arm Logo? </span><span>{data.leftArmLogo === "/media/platypus.png" ? "Star" : "None"}</span></div>
            </div>
            <div className="shipping-details">
                <h3>Shipping Address</h3>
                {console.log(data)}
                <p>{data.shipping_details.address.line1}</p>
                {data.shipping_details.address.line2 && <p>{data.shipping_details.address.line2}</p>}
                <p>{data.shipping_details.address.city}, {data.shipping_details.address.state} {data.shipping_details.address.postal_code} {data.shipping_details.address.country}</p>
            </div>
            <h3>Order Details</h3>
            <div className="space-between">
                <span>Custom Jersey<span className="gray-text">($49)</span></span>
                <span className="push-right">
                    <span>x {data.teamDetails.length}</span>
                    <span className="ml-1">$ {data.price * data.teamDetails.length}</span>
                </span>
            </div>
            <Roster receiptTeam={data.teamDetails} />
            <div className="align-right">
                <div ><span className="bold">Subtotal: </span><span className="fixed-width">$ {data.price * data.teamDetails.length}</span></div>
                <div className="padding"><span className="bold">Shipping:</span><span className="fixed-width">$ {25}</span></div>
                <div ><span className="bold">Total:</span><span className="fixed-width">$ {data.price * data.teamDetails.length + 25}</span></div>
            </div>
            <div className="cc-disclaimer">* Please note that we will not show your credit card information here. For security purposes, we don't store it. We can, however, retrieve it upon your request. If you see any issues with your order, please contact us at info@flatbillbaseball.com.</div>
        </div>
    )
}

export default Receipt