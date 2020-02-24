import React, { useState, useEffect } from 'react'
import './_AppWrapper.scss'

const AppWrapper = ({ children }) => {

    const [viewportHeight, setViewportHeight] = useState(window.innerHeight)

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