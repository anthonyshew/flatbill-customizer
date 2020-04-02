import React, { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import './_AppWrapper.scss'
import usePreventMobileZoom from '../../lib/hooks/usePreventMobileZoom'
import useStateValue from '../../lib/hooks/useStateValue'

import Header from '../Header'
import ViewBar from '../design/ViewBar'
import ProductDisplay from '../design/ProductDisplay'
import HorizontalSlider from '../design/HorizontalSlider'
import Footer from '../design/Footer'
import RosterWrapper from '../roster/RosterWrapper/RosterWrapper'
import Summary from '../summary'
import CheckoutForm from '../checkout/Checkout'

let stripeKey

fetch('/stripe-key')
    .then(res => res.json())
    .then(res => stripeKey = res.key)


const AppWrapper = ({ children }) => {
    usePreventMobileZoom()

    const [{ step }] = useStateValue()

    const [viewportHeight] = useState(window.innerHeight)

    return (
        <div className={`app-wrapper`} style={{ height: viewportHeight }}>
            <Header />
            {
                step === 1 ? <StepOne /> :
                    step === 2 ? <StepTwo /> :
                        step === 3 ? <StepThree /> :
                            step === 4 ? <StepFour /> :
                                step === 5 ? <StepFive /> :
                                    <p>Something went wrong with the steps...</p>
            }
        </div>
    )
}

export default AppWrapper

const StepOne = (props) => {

    const [{ view }] = useStateValue()

    return (
        <>
            <ProductDisplay view={view} />
            <ViewBar />
            <HorizontalSlider />
            <Footer sticky />
        </>
    )
}

const StepTwo = (props) => {
    return (
        <RosterWrapper />
    )
}

const StepThree = (props) => {
    return (
        <Summary />
    )
}

const StepFour = (props) => {
    console.log(stripeKey)

    const stripePromise = loadStripe(stripeKey)

    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    )
}

const StepFive = (props) => {
    return (
        <div className="container-thank-you">
            <h2>Thank you for your order!</h2>
            <img className="logo" src="/media/logo.png" alt="Flatbill Baseball Logo." title="Flatbill Baseball Logo" />
            <a href="https://flatbillbaseball.com" rel="noopener noreferrer">Looking for more? Visit the main Flatbill Baseball shop!</a>
        </div>
    )
}