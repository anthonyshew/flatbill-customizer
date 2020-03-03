import React, { useState } from 'react'
import './_AppWrapper.scss'
import usePreventMobileZoom from '../../lib/hooks/usePreventMobileZoom'
import useStateValue from '../../lib/hooks/useStateValue'

import Header from '../Header'
import ViewBar from '../design/ViewBar'
import ProductDisplay from '../design/ProductDisplay'
import HorizontalSlider from '../design/HorizontalSlider'
import Footer from '../design/Footer'

const AppWrapper = ({ children }) => {
    usePreventMobileZoom()

    const [{ step }] = useStateValue()

    const [viewportHeight] = useState(window.innerHeight)

    return (
        <div className={`app-wrapper`} style={{ height: viewportHeight }}>
            <Header />
            {step === 1 ? <StepOne /> : <p>step 2</p>}
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
            <Footer sticky price={200} />
        </>
    )
}