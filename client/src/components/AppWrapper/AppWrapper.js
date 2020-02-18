import React, { useState, useEffect } from 'react'
import './_AppWrapper.scss'
// import useStateValue from '../../lib/hooks/useStateValue'

const AppWrapper = ({ children }) => {

    const [viewportHeight, setViewportHeight] = useState(window.innerHeight)

    // const [{ product }] = useStateValue()

    useEffect(() => {
        window.addEventListener("resize", () => setViewportHeight(window.innerHeight))
    }, [])

    return (
        <div className={`app-wrapper`} style={{ height: viewportHeight }}>
            {children}
        </div>
    )
}

export default AppWrapper