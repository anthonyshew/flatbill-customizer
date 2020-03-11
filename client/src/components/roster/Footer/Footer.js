import React, { useState } from 'react'
import gsap from 'gsap'
import './_Footer.scss'
import { colors } from '../../../styles/colors'
import useStateValue from '../../../lib/hooks/useStateValue'

import Button from '../../Button/Button'

const Footer = ({ sticky, currentRoster }) => {
    const [, dispatch] = useStateValue()

    const [error, setError] = useState("")

    const handleSubmit = () => {
        setError("")
        if (currentRoster.some(elem => elem.name === '' || elem.number === '')) {
            setError("Please fill in all fields!")
            return gsap.timeline({ repeat: 2 })
                .to(".button-roster-confirm", {
                    duration: .1,
                    x: 20,
                })
                .to(".button-roster-confirm", {
                    duration: .1,
                    x: -20
                })
                .then(res => gsap.to(".button-roster-confirm", {
                    duration: .1,
                    x: 0
                }))
        }

        dispatch({ type: "STEP_CHANGE", step: 3 })
        dispatch({ type: "ROSTER_CONFIRM", roster: currentRoster })
    }

    return (
        <div className={`footer-roster${sticky ? " sticky" : ""}`}>
            <div className="error-alert">{error}</div>
            <Button
                className="half-height button-roster-confirm"
                text="Confirm Roster"
                padding=".5rem"
                border={`2px solid ${colors.darkGray}`}
                borderRadius="1rem"
                style={{ width: "80vw" }}
                onClick={handleSubmit}
            />
        </div>
    )
}

export default Footer