import React from 'react'
import './_Footer.scss'
import { colors } from '../../styles/colors'
import useStateValue from '../../lib/hooks/useStateValue'

import Button from '../Button/Button'

const Footer = ({ sticky }) => {

    const [{ editorCurrentlyOpen }, dispatch] = useStateValue()

    return (
        <div className={`footer${sticky ? " sticky" : ""}`}>
            {editorCurrentlyOpen === "defaultMenu" ?
                <Button
                    className="half-height"
                    text="Done Designing!"
                    padding=".5rem"
                    border={`2px solid ${colors.darkGray}`}
                    borderRadius="1rem"
                    style={{ width: "80vw" }}
                />
                : <Button
                    className="half-height"
                    text="Confirm"
                    padding=".5rem"
                    border={`2px solid ${colors.darkGray}`}
                    borderRadius="1rem"
                    style={{ width: "80vw" }}
                    onClick={() => dispatch({ type: "EDITOR_CHANGE", menu: "defaultMenu" })}
                />
            }
        </div>
    )
}

export default Footer