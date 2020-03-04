import React, { useState } from 'react'
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
                            <p>Something went wrong...</p>
            }
        </div>
    )
}

export default AppWrapper

const StepOne = (props) => {
    return (
        <>
            <ProductDisplay />
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