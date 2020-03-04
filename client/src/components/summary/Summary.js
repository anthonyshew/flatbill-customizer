import React from 'react'
import './_Summary.scss'

const Summary = ({ ...props }) => {
    return (
        <div className="container-summary">
            Let's have a side by side view of the front and back of the design taking up half the view.
            Then a price.
            Then the next half is a summary of the roster.
            Then a full confirm button that takes them to a payment page.
    </div>
    )
}

export default Summary