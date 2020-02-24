import { useEffect } from 'react'

const usePreventMobileZoom = () => {
    useEffect(() => {
        window.addEventListener("resize", () => setViewportHeight(window.innerHeight))
        document.addEventListener('touchmove', (event) => {
            if (event.scale !== 1) { event.preventDefault() }
        }, { passive: false })

        let lastTouchEnd = 0;
        document.addEventListener('touchend', (event) => {
            let now = (new Date()).getTime()
            if (now - lastTouchEnd <= 300) {
                event.preventDefault()
            }
            lastTouchEnd = now;
        }, { passive: false });
    }, [])
}

export default usePreventMobileZoom