import React from 'react'
import gsap from 'gsap'
import './_ViewBar.scss'
import useStateValue from '../../lib/hooks/useStateValue'

import Button from '../Button'
import SVG from '../SVG'

const ViewBar = ({ ...props }) => {

    const [{ view }, dispatch] = useStateValue()

    const handleClick = () => {
        dispatch({
            type: "flipView",
            newView: view === 'front' ? 'back' : 'front'
        })
        gsap.timeline()
            .killTweensOf(".arrow-right")
            .set(".arrow-right", { x: 0 })
            .to(".arrow-right", {
                duration: .3,
                x: 50,
                autoAlpha: 1
            })
            .to(".arrow-right", {
                duration: .3,
                x: 50,
                autoAlpha: 0,
            })
    }

    return (
        <div className="viewbar">
            <Button className="view-toggle"
                text={view === 'front' ? "Front View" : "Back View"}
                onClick={handleClick} />
            <SVG name="arrow-right" className="arrow-right" alt="Activation arrow to show you that you changed jersey views." />
        </div>

    )
}

export default ViewBar