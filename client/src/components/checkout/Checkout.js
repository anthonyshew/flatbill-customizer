import React, { useState } from 'react'
import './_Checkout.scss'
import {
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js'
import useStateValue from '../../lib/hooks/useStateValue'

import SVG from '../SVG/SVG'

const style = {
    style: {
        base: {
            fontFamily: '"Fira Sans Condensed", sans-serif',
            fontSize: "16px",
            fontWeight: 600,
            '::placeholder': {
                fontWeight: 400,
            }
        }
    }
}

const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    const [{ price }, dispatch] = useStateValue()

    const [billingDetails, setBillingDetails] = useState({
        address: {
            city: '',
            country: '',
            line1: '',
            line2: '',
            postal_code: '',
            state: '',
        },
        email: '',
        name: '',
        phone: '',
    })

    const [shippingDetails, setShippingDetails] = useState({
        address: {
            city: '',
            country: '',
            line1: '',
            line2: '',
            postal_code: '',
            state: '',
        },
        email: '',
        name: '',
        phone: '',
    })

    const [matchDetails, setMatchDetails] = useState(true)

    const handleBasicChange = (e) => {
        setBillingDetails({
            ...billingDetails,
            [e.target.id]: e.target.value
        })
    }

    const handleBillingChange = (e) => {
        setBillingDetails({
            ...billingDetails,
            address: {
                ...billingDetails.address,
                [e.target.id]: e.target.value
            }
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardNumberElement)
        })
        console.log(error, paymentMethod)
    }

    return (
        <form className="checkout-form" onSubmit={handleSubmit}>
            <button
                className="button-back"
                onClick={() => dispatch({ type: "STEP_CHANGE", step: 3 })}
            >
                {<SVG name="arrow-left" className="svg" />} Back to Summary
                </button>
            <h2>Checkout</h2>
            <h3>Order Your Jerseys</h3>
            <h4>${price}</h4>
            <h5>Basic Info</h5>
            <label>
                Name
                <input
                    id="name"
                    className="form-input"
                    onChange={handleBasicChange}
                    value={billingDetails.name}
                />
            </label>
            <label>
                E-Mail
                <input
                    id="email"
                    className="form-input"
                    onChange={handleBasicChange}
                    value={billingDetails.email}
                />
            </label>
            <label>
                Phone
                <input
                    id="phone"
                    className="form-input"
                    onChange={handleBasicChange}
                    value={billingDetails.phone}
                />
            </label>
            <h5>Billing Info</h5>
            <label>
                Address Line 1
                <input
                    id="line1"
                    className="form-input"
                    onChange={handleBillingChange}
                    value={billingDetails.line1}
                />
            </label>
            <label>
                Address Line 2 (Optional)
                <input
                    id="line2"
                    className="form-input"
                    onChange={handleBillingChange}
                    value={billingDetails.line2}
                />
            </label>
            <label>
                City
                <input
                    id="city"
                    className="form-input"
                    onChange={handleBillingChange}
                    value={billingDetails.city}
                />
            </label>
            <label>
                State
                <input
                    id="state"
                    className="form-input"
                    onChange={handleBillingChange}
                    value={billingDetails.state}
                />
            </label>
            <label>
                Postal Code
                <input
                    id="postal_code"
                    className="form-input"
                    onChange={handleBillingChange}
                    value={billingDetails.postal_code}
                />
            </label>
            <label>
                Country
                <input
                    id="country"
                    className="form-input"
                    onChange={handleBillingChange}
                    value={billingDetails.country}
                />
            </label>
            <h5>Billing Info</h5>

            <label>
                Card Number
                <CardNumberElement
                    className="form-input"
                    options={style}
                />
            </label>
            <label>
                Card Expiration
                <CardExpiryElement
                    className="form-input"
                    options={style}
                />
            </label>
            <label>
                CVC
                <CardCvcElement
                    className="form-input"
                    options={style}
                />
            </label>
            {/* <div className="error">{error}</div> */}
            <button type="submit" disabled={!stripe}>
                Pay
      </button>
        </form>
    )
}

export default CheckoutForm