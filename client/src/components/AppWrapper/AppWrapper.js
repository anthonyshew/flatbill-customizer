import React, { useState, useEffect } from 'react'
import './_AppWrapper.scss'
import usePreventMobileZoom from '../../lib/hooks/usePreventMobileZoom'

const AppWrapper = ({ children }) => {

    const [viewportHeight] = useState(window.innerHeight)

    usePreventMobileZoom()

    return (
        <div className={`app-wrapper`} style={{ height: viewportHeight }}>
            {children}
        </div>
    )
}

export default AppWrapper