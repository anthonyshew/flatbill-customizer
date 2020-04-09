
import React, { useState } from 'react'
import './_Checkout.scss'
import {
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js'
import { useForm } from 'react-hook-form'

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
    const { register, handleSubmit, errors } = useForm()
    const stripe = useStripe()
    const elements = useElements()
    const [{ price, teamDetails, model, primaryColor, secondaryColor, tertiaryColor, chestLogo, number, lastName, leftArmLogo, rightArmLogo }, dispatch] = useStateValue()

    const [matchDetails, setMatchDetails] = useState(true)
    const [stripeError, setStripeError] = useState({
        bool: false,
        message: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const onSubmit = async (formData, event) => {
        event.preventDefault()
        setIsSubmitting(true)

        fetch('/checkout', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ amount: price * teamDetails.length })
        })
            .then(res => res.json())
            .then(async (res) => {
                const { error } = await stripe.confirmCardPayment(`${res.client_secret}`, {
                    payment_method: {
                        card: elements.getElement(CardNumberElement),
                        billing_details: {
                            address: {
                                city: formData.bill_city ?? formData.ship_city,
                                country: formData.bill_country ?? formData.ship_country,
                                line1: formData.bill_line1 ?? formData.ship_line1,
                                line2: formData.bill_line2 ?? formData.ship_line2 ?? "",
                                postal_code: formData.bill_postal_code ?? formData.ship_postal_code,
                                state: formData.bill_state ?? formData.ship_state,
                            }
                        }
                    }
                })

                if (error) {
                    setStripeError({ bool: true, message: error.message })
                    setIsSubmitting(false)
                } else {
                    fetch('/checkout-success', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            orderId: Date.now().toString(36) + Math.random().toString(36).substr(2),
                            purchaseDate: new Date().toLocaleString(),
                            customer_email: formData.email,
                            shipping_details: {
                                address: {
                                    city: formData.ship_city,
                                    country: formData.ship_country,
                                    line1: formData.ship_line1,
                                    line2: formData.ship_line2 ?? "",
                                    postal_code: formData.ship_postal_code,
                                    state: formData.ship_state,
                                }
                            },
                            price: price,
                            teamDetails: teamDetails,
                            model: model,
                            primaryColor: primaryColor,
                            secondaryColor: secondaryColor,
                            tertiaryColor: tertiaryColor,
                            chestLogo: chestLogo,
                            number: number,
                            lastName: lastName,
                            leftArmLogo: leftArmLogo,
                            rightArmLogo: rightArmLogo
                        })
                    }).then(res => dispatch({ type: "STEP_CHANGE", step: 5 }))

                }
            })
    }

    return (
        <form className="checkout-form" onSubmit={handleSubmit(onSubmit)}>
            <button
                className="button-back"
                onClick={() => dispatch({ type: "STEP_CHANGE", step: 3 })}
            >
                {<SVG name="arrow-left" className="svg" />} Back to Summary
                </button>
            <h2>Checkout</h2>
            <h3>Get Your Jerseys</h3>
            <h4>Shipping Info</h4>
            <label>
                Name
                <input
                    ref={register({ required: true })}
                    name="ship_name"
                    className="form-input"
                />
            </label>
            {errors.ship_name && <p className="error">Name Required</p>}
            <label>
                E-Mail
                <input
                    ref={register({ required: true, pattern: /^.+@[^].*\.[a-z]{2,}$/ })}
                    name="email"
                    className="form-input"
                />
            </label>
            {errors.email && <p className="error">Valid Email Required</p>}
            <label>
                Phone
                <input
                    ref={register({ required: true, minLength: 10, maxLength: 10 })}
                    name="phone"
                    className="form-input"
                />
            </label>
            {errors.phone && <p className="error mb-1">Valid Phone Number Required</p>}
            <label>
                Address Line 1
                <input
                    ref={register({ required: true })}
                    name="ship_line1"
                    className="form-input"
                />
            </label>
            {errors.ship_line1 && <p className="error mb-1">Address Required</p>}
            <label>
                Address Line 2 (Optional)
                <input
                    ref={register}
                    name="ship_line2"
                    className="form-input"
                />
            </label>
            <label>
                City
                <input
                    ref={register({ required: true })}
                    name="ship_city"
                    className="form-input"
                />
            </label>
            {errors.ship_city && <p className="error">City Required</p>}
            <label>
                State
                <input
                    ref={register({ required: true })}
                    name="ship_state"
                    className="form-input"
                />
            </label>
            {errors.ship_state && <p className="error">State Required</p>}
            <label>
                Postal Code
                <input
                    ref={register({ required: true, minLength: 5, maxLength: 5 })}
                    name="ship_postal_code"
                    className="form-input"
                />
            </label>
            {errors.ship_postal_code && <p className="error">Postal Code Required</p>}
            <label>
                Country
                <select
                    ref={register({ required: true })}
                    name="ship_country"
                    className="form-input"
                >
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                </select>
            </label>
            {errors.ship_country && <p className="error mb-1">Country Required</p>}
            <h4>Billing Info</h4>
            <div className="container-checkbox">
                <label className="checkbox">
                    <input
                        type="checkbox"
                        checked={matchDetails}
                        onChange={() => setMatchDetails(!matchDetails)}
                    />
                    <span></span>
                </label>
                <p>My billing info is the same as my shipping info.</p>
            </div>
            <BillingDetails
                matchDetails={matchDetails}
                register={register}
                errors={errors}
            />
            <h4>Order Summary</h4>
            <div className="container-order-summary">
                <p>Custom Baseball Jersey x {teamDetails.length}</p>
                <p className="p-margin">Shipping: $25</p>
                <h5>Total: ${price * teamDetails.length + 25}</h5>
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
            {stripeError.bool && <p className="error mb-1">{stripeError.message}</p>}
            <button
                type="submit"
                className="submit"
                disabled={!stripe}
                style={isSubmitting ? { backgroundColor: "#e5e5e5", transform: "scale(.6)" } : null}
            >
                Pay
      </button>
        </form>
    )
}

export default CheckoutForm

const BillingDetails = ({ matchDetails, register, errors }) => {

    return (
        <div className="container-billing-details" style={matchDetails ? { display: "none" } : {}}>
            <label>
                Name
                <input
                    ref={!matchDetails ? register({ required: true }) : null}
                    name="bill_name"
                    className="form-input"
                />
            </label>
            {errors.bill_name && <p className="error">Name Required</p>}
            <label>
                Email
                <input
                    ref={!matchDetails ? register({ required: true, pattern: /^.+@[^].*\.[a-z]{2,}$/ }) : null}
                    name="bill_email"
                    className="form-input"
                />
            </label>
            {errors.bill_email && <p className="error mb-1">Valid Email Required</p>}
            <label>
                Phone Number
                <input
                    ref={!matchDetails ? register({ required: true, minLength: 10, maxLength: 10 }) : null}
                    name="bill_phone"
                    className="form-input"
                />
            </label>
            {errors.bill_phone && <p className="error mb-1">Valid Phone Number Required</p>}
            <label>
                Address Line 1
            <input
                    ref={!matchDetails ? register({ required: true }) : null}
                    name="bill_line1"
                    className="form-input"
                />
            </label>
            {errors.bill_line1 && <p className="error mb-1">Address Required</p>}
            <label>
                Address Line 2 (Optional)
            <input
                    ref={!matchDetails ? register : null}
                    name="bill_line2"
                    className="form-input"
                />
            </label>
            <label>
                City
            <input
                    ref={!matchDetails ? register({ required: true }) : null}
                    name="bill_city"
                    className="form-input"
                />
            </label>
            {errors.bill_city && <p className="error">City Required</p>}
            <label>
                State
            <input
                    ref={!matchDetails ? register({ required: true }) : null}
                    name="bill_state"
                    className="form-input"
                />
            </label>
            {errors.bill_state && <p className="error">State Required</p>}
            <label>
                Postal Code
            <input
                    ref={!matchDetails ? register({ required: true, minLength: 5, maxLength: 5 }) : null}
                    name="bill_postal_code"
                    className="form-input"
                />
            </label>
            {errors.bill_postal_code && <p className="error">Postal Code Required</p>}
            <label>
                Country
                <select
                    ref={register({ required: true })}
                    name="bill_country"
                    className="form-input"
                >
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                </select>
            </label>
            {errors.bill_country && <p className="error mb-1">Country Required</p>}
        </div>
    )
}