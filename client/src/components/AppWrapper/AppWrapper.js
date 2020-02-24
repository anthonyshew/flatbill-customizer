import React, { useState, useEffect } from 'react'
import './_AppWrapper.scss'

const AppWrapper = ({ children }) => {

    const [viewportHeight, setViewportHeight] = useState(window.innerHeight)

    useEffect(() => {
        window.addEventListener("resize", () => setViewportHeight(window.innerHeight))
        document.addEventListener('touchmove', (event) => {
            if (event.scale !== 1) { event.preventDefault() }
        }, { passive: false })

        let lastTouchEnd = 0;
        document.addEventListener('touchend', (event) => {
            let now = (new Date()).getTime();
            if (now - lastTouchEnd <= 300) {
                event.preventDefault();
            }
            lastTouchEnd = now;
        }, { passive: false });
    }, [])

    return (
        <div className={`app-wrapper`} style={{ height: viewportHeight }}>
            {children}
        </div>
    )
}

export default AppWrapper