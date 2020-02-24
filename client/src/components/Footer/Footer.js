import React, { useEffect } from 'react'
import gsap from 'gsap'
import './_Footer.scss'
import { colors } from '../../styles/colors'
import useStateValue from '../../lib/hooks/useStateValue'

import Button from '../Button/Button'

const Footer = ({ sticky }) => {

    const [{ editorCurrentlyOpen }, dispatch] = useStateValue()

    useEffect(() => {
        if (editorCurrentlyOpen !== "defaultMenu") {
            gsap.timeline()
                .set(".button-confirm", { y: 50, autoAlpha: 0 })
                .to(".button-confirm", {
                    y: 0,
                    autoAlpha: 1
                })
        }
        if (editorCurrentlyOpen === "defaultMenu") {
            gsap.timeline()
                .set(".button-design", { y: 50, autoAlpha: 0 })
                .to(".button-design", {
                    y: 0,
                    autoAlpha: 1
                })
        }
    }, [editorCurrentlyOpen])

    return (
        <div className={`footer${sticky ? " sticky" : ""}`}>
            {editorCurrentlyOpen === "defaultMenu" ?
                <Button
                    className="half-height button-design"
                    text="Done Designing!"
                    padding=".5rem"
                    border={`2px solid ${colors.darkGray}`}
                    borderRadius="1rem"
                    style={{ width: "80vw" }}
                    onClick={() => console.log("Go to team roster page.")}
                />
                : <Button
                    className="half-height button-confirm"
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