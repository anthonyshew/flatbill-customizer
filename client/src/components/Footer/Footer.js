import React from 'react'
import './_Footer.scss'
import { colors } from '../../styles/colors'
import useStateValue from '../../lib/hooks/useStateValue'

import Button from '../Button/Button'

const Footer = ({ sticky }) => {

    const [{ editorCurrentlyOpen, price }, dispatch] = useStateValue()

    return (
        <div className={`footer${sticky ? " sticky" : ""}`}>
            <p className="price">Price: ${price}</p>
            {editorCurrentlyOpen === "fontPickerChest" || editorCurrentlyOpen === "fontPickerNumber" ?
                <Button
                    className="half-height"
                    text="Confirm"
                    padding=".5rem"
                    border={`2px solid ${colors.darkGray}`}
                    borderRadius="1rem"
                    onClick={() => dispatch({ type: "EDITOR_CHANGE", menu: "defaultMenu" })}
                /> :
                <Button
                    className="half-height"
                    text="Done!"
                    padding=".5rem"
                    border={`2px solid ${colors.darkGray}`}
                    borderRadius="1rem"
                />
            }
        </div>
    )
}

export default Footer