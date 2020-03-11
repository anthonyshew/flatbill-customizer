import React from 'react'
import './_Summary.scss'
import useStateValue from '../../lib/hooks/useStateValue'

import SVG from '../SVG/SVG'
import ProductDisplay from '../design/ProductDisplay'

const Summary = ({ ...props }) => {

    const [{ price, teamDetails, chestLogo }, dispatch] = useStateValue()

    return (
        <div className="container-summary">
            <button
                className="button-back"
                onClick={() => dispatch({ type: "STEP_CHANGE", step: 2 })}
            >
                {<SVG name="arrow-left" className="svg" />} Back to Roster
                </button>
            <span
                className="price"
            >
                ${price * teamDetails.length}
            </span>
            <h2>Your Design</h2>
            <div className="container-design-view">
                <div className="container">
                    <ProductDisplay view="front" />
                </div>
                <div className="container">
                    <ProductDisplay view="back" />
                </div>
            </div>
            <h2 className="team-name">Your Team Name: {chestLogo.text}</h2>
            <h2>Your Roster</h2>
            <div className="container-roster-summary">
                {
                    teamDetails.map(elem => {
                        return <div key={elem.id} className="player">
                            {elem.name}, {elem.number}, {elem.size}
                        </div>
                    })
                }
            </div>
            <button
                className="confirm-button"
                onClick={() => dispatch({ type: "STEP_CHANGE", step: 4 })}
            >
                Checkout
            </button>
        </div>
    )
}

export default Summary