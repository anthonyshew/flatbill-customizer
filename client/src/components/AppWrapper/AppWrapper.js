import React, { useState } from 'react'
import './_AppWrapper.scss'
import usePreventMobileZoom from '../../lib/hooks/usePreventMobileZoom'
import useStateValue from '../../lib/hooks/useStateValue'

import Header from '../Header'
import ViewBar from '../ViewBar'
import ProductDisplay from '../ProductDisplay'
import HorizontalSlider from '../HorizontalSlider'
import Footer from '../Footer'

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