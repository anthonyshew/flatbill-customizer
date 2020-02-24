import { useEffect } from 'react'

const usePreventMobileZoom = () => {
    useEffect(() => {
        document.addEventListener('touchmove', (event) => {
            if (event.scale !== 1) { event.preventDefault() }
        }, { passive: false })

        let lastTouchEnd = 0;
        document.addEventListener('touchend', (event) => {
            let now = (new Date()).getTime()
            if (now - lastTouchEnd <= 500) {
                event.preventDefault()
            }
            lastTouchEnd = now
        }, { passive: false })
    }, [])
}

export default usePreventMobileZoom