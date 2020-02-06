import React, { useState, useEffect } from 'react'
import './_AppWrapper.scss'
import useStateValue from '../../lib/hooks/useStateValue'

const AppWrapper = ({ children }) => {

    const [viewportHeight, setViewportHeight] = useState(window.innerHeight)

    useEffect(() => {
        window.addEventListener("resize", () => setViewportHeight(window.innerHeight))
    }, [])

    const [{ activeTheme }] = useStateValue()

    return (
        <div className={`app-wrapper theme-${activeTheme}`} style={{ minHeight: viewportHeight }}>
            {children}
        </div>
    )
}

export default AppWrapper