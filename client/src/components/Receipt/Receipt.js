import React from 'react'
import './_Receipt.scss'

import ProductDisplay from '../design/ProductDisplay'
import { Roster } from '../summary/Summary'

const Receipt = ({ ...props }) => {
    return (
        <div className="receipt">
            <h1>Your Custom Jersey Order</h1>
            <h2>Order Number: #123123123</h2>
            <div className="product-display-container">
                <ProductDisplay view="front" />
                <ProductDisplay view="back" />
            </div>
            <div className="design-attributes">
                <span>Model: </span><span>Solid </span>
            </div>
            <div className="space-between">
                <span>Custom Baseball Jersey</span>
                <span>x 30</span>
                <span>${49 * 30}</span>
            </div>
            <Roster />
            <div className="align-right">
                <div><span>Subtotal: </span><span>${39 * 40}</span></div>
                <div><span>Shipping:</span><span>${25}</span></div>
                <div><span>Total:</span><span>${39 * 40 + 25}</span></div>
            </div>
        </div>
    )
}

export default Receipt