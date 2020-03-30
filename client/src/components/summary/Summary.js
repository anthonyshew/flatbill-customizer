import React from 'react'
import './_Summary.scss'
import useStateValue from '../../lib/hooks/useStateValue'

import SVG from '../SVG/SVG'
import ProductDisplay from '../design/ProductDisplay'

const Summary = ({ ...props }) => {

    const [{ price, teamDetails }, dispatch] = useStateValue()

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
            <h2>Your Roster</h2>
            <Roster teamDetails={teamDetails} />
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

export const Roster = ({ receiptTeam, ...props }) => {
    const [{ teamDetails }] = useStateValue()

    return (
        <>
            <table className="container-roster-summary">
                <thead className="table-headers">
                    <tr className="headers-row">
                        <th className="w-80 align-left">Player Name</th>
                        <th className="w-10 align-left">#</th>
                        <th className="w-10 align-left">Size</th>
                    </tr>
                </thead>
                <tbody>
                    {receiptTeam ? receiptTeam.map(elem => {
                        return <tr key={elem.id} className="player">
                            <td className="w-80 align-left">{elem.name}</td>
                            <td className="w-10 align-left">{elem.number}</td>
                            <td className="w-10 align-left">{elem.size}</td>
                        </tr>
                    }) :
                        teamDetails.map(elem => {
                            return <tr key={elem.id} className="player">
                                <td className="w-80 align-left">{elem.name}</td>
                                <td className="w-10 align-left">{elem.number}</td>
                                <td className="w-10 align-left">{elem.size}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}