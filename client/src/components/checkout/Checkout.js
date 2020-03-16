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
    const [{ price, teamDetails }, dispatch] = useStateValue()

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


    const handleBasicShippingChange = (e) => {
        setShippingDetails({
            ...shippingDetails,
            [e.target.id]: e.target.value
        })
    }

    const handleShippingChange = (e) => {
        setShippingDetails({
            ...shippingDetails,
            address: {
                ...shippingDetails.address,
                [e.target.id]: e.target.value
            }
        })
    }

    const handleBasicBillingChange = (e) => {
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

    const handleCheckboxChange = (e) => {
        setMatchDetails(e.target.checked)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        fetch('/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: price })
        })
            .then(res => res.json())
            .then(async (res) => {

                console.log({
                    card: elements.getElement(CardNumberElement),
                    billing_details: billingDetails
                })

                const { error, paymentMethod } = await stripe.confirmCardPayment(`${res.client_secret}`, {
                    payment_method: {
                        card: elements.getElement(CardNumberElement),
                        billing_details: matchDetails ? shippingDetails : billingDetails
                    }
                })

                console.log(error, paymentMethod)
            })
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
            <h3>Get Your Jerseys</h3>
            <h4>Basic Info</h4>
            <label>
                Name
                <input
                    id="name"
                    className="form-input"
                    onChange={handleBasicShippingChange}
                    value={shippingDetails.name}
                />
            </label>
            <label>
                E-Mail
                <input
                    id="email"
                    className="form-input"
                    onChange={handleBasicShippingChange}
                    value={shippingDetails.email}
                />
            </label>
            <label>
                Phone
                <input
                    id="phone"
                    className="form-input"
                    onChange={handleBasicShippingChange}
                    value={shippingDetails.phone}
                />
            </label>
            <h4>Shipping Info</h4>
            <label>
                Address Line 1
                <input
                    id="line1"
                    className="form-input"
                    onChange={handleShippingChange}
                    value={shippingDetails.line1}
                />
            </label>
            <label>
                Address Line 2 (Optional)
                <input
                    id="line2"
                    className="form-input"
                    onChange={handleShippingChange}
                    value={shippingDetails.line2}
                />
            </label>
            <label>
                City
                <input
                    id="city"
                    className="form-input"
                    onChange={handleShippingChange}
                    value={shippingDetails.city}
                />
            </label>
            <label>
                State
                <input
                    id="state"
                    className="form-input"
                    onChange={handleShippingChange}
                    value={shippingDetails.state}
                />
            </label>
            <label>
                Postal Code
                <input
                    id="postal_code"
                    className="form-input"
                    onChange={handleShippingChange}
                    value={shippingDetails.postal_code}
                />
            </label>
            <label>
                Country
                <input
                    id="country"
                    className="form-input"
                    onChange={handleShippingChange}
                    value={shippingDetails.country}
                />
            </label>
            <h4>Billing Info</h4>
            <div className="container-checkbox">
                <label className="checkbox">
                    <input
                        type="checkbox"
                        checked={matchDetails}
                        onChange={handleCheckboxChange}
                    />
                    <span></span>
                </label>
                <p>My billing info is the same as my shipping info.</p>
            </div>
            {!matchDetails && <BillingDetailsInputs
                handleBasicBillingChange={handleBasicBillingChange}
                handleBillingChange={handleBillingChange}
                billingDetails={billingDetails} />}
            <h4>Order Summary</h4>
            <div className="container-order-summary">
                <p>Custom Baseball Jersey x {teamDetails.length}</p>
                <p className="p-margin">Shipping: FREE!</p>
                <h5>Total: ${price * teamDetails.length}</h5>
            </div>
            <h4>Card Info</h4>
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
            <button type="submit" disabled={!stripe}>
                Pay
      </button>
        </form>
    )
}

export default CheckoutForm

const BillingDetailsInputs = ({
    handleBasicBillingChange,
    handleBillingChange,
    billingDetails }) => {
    return (
        <>
            <label>
                Name
                <input
                    id="name"
                    className="form-input"
                    onChange={handleBasicBillingChange}
                    value={billingDetails.name}
                />
            </label>
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
        </>
    )
}