import React from 'react'
import './_Footer.scss'

import Button from '../Button/Button'

const Footer = ({ sticky }) => {
    return (
        <div className={`footer${sticky ? " sticky" : ""}`}>
            <Button
                text="Done!"
                padding="1rem"
                backgroundColor="green"
                border="2px solid black"
                borderRadius="1rem"
            />
        </div>
    )
}

export default Footer