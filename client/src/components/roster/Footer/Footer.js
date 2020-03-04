import React from 'react'
import './_Footer.scss'
import { colors } from '../../../styles/colors'
import useStateValue from '../../../lib/hooks/useStateValue'

import Button from '../../Button/Button'

const Footer = ({ sticky, currentRoster }) => {
    const [, dispatch] = useStateValue()

    return (
        <div className={`footer${sticky ? " sticky" : ""}`}>
            <Button
                className="half-height button-roster-confirm"
                text="Confirm Roster"
                padding=".5rem"
                border={`2px solid ${colors.darkGray}`}
                borderRadius="1rem"
                style={{ width: "80vw" }}
                onClick={() => {
                    dispatch({ type: "STEP_CHANGE", step: 3 })
                    dispatch({ type: "ROSTER_CONFIRM", roster: currentRoster })
                }}
            />
        </div>
    )
}

export default Footer