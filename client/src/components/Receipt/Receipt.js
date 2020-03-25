import React, { useState } from 'react'
import './_Receipt.scss'

import ProductDisplay from '../design/ProductDisplay'
import { Roster } from '../summary/Summary'

const Receipt = ({ ...props }) => {

    const [data, setData] = useState({
        step: 4,
        teamDetails: [{
            id: Date.now(),
            name: '',
            number: '',
            size: 'M',
        }],
        price: 49,
        view: 'front',
        model: 'solid',
        primaryColor: '#960001',
        secondaryColor: '#8abade',
        tertiaryColor: '#ffffff',
        chestLogo: {
            text: "Flatbill",
            fontFamily: "Galada",
            fontSize: 32,
            outline: true,
            shadow: true
        },
        number: {
            digit: 31,
            front: true,
            fontFamily: "Galada",
            fontSize: 32,
            outline: true,
            shadow: true
        },
        leftArmLogo: '/media/platypus.png',
        rightArmLogo: '/media/star.png',
        editorCurrentlyOpen: 'defaultMenu'
    })

    return (
        <div className="receipt">
            <h1>Your Custom Jersey Order</h1>
            <h2><span className="bold">Order Number:</span> #123123123</h2>
            <div className="product-display-container">
                <ProductDisplay view="front" />
                <ProductDisplay view="back" />
            </div>
            <div className="design-attributes">
                <h3>Design Attributes</h3>
                <span>Model: </span><span>Solid </span>
            </div>
            <h3>Order Details</h3>
            <div className="space-between">
                <span>Custom Jersey<span className="gray-text">($49)</span></span>
                <span className="push-right">
                    <span>x {data.teamDetails.length}</span>
                    <span className="ml-1">$ {data.price * data.teamDetails.length}</span>
                </span>
            </div>
            <Roster />
            <div className="align-right">
                <div ><span className="bold">Subtotal: </span><span className="fixed-width">$ {data.price * data.teamDetails.length}</span></div>
                <div className="padding"><span className="bold">Shipping:</span><span className="fixed-width">$ {25}</span></div>
                <div ><span className="bold">Total:</span><span className="fixed-width">$ {data.price * data.teamDetails.length + 25}</span></div>
            </div>
        </div>
    )
}

export default Receipt