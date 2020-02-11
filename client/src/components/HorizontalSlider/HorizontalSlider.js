import React from 'react'
import './_HorizontalSlider.scss'
import useStateValue from '../../lib/hooks/useStateValue'

import DefaultSlider from '../DefaultSlider'
import ModelSlider from '../ModelSlider'
import ColorSlider from '../ColorSlider'
import LogoSlider from '../LogoEditor'

const HorizontalSlider = ({ ...props }) => {

    const [{ editorCurrentlyOpen }] = useStateValue()

    return (
        <ul className="horizontal-slider">
            {editorCurrentlyOpen === "defaultMenu" ? <DefaultSlider /> :
                editorCurrentlyOpen === "models" ? <ModelSlider /> :
                    editorCurrentlyOpen === "primaryColor" ? <ColorSlider colorType="primary" /> :
                        editorCurrentlyOpen === "secondaryColor" ? <ColorSlider colorType="secondary" /> :
                            editorCurrentlyOpen === "tertiaryColor" ? <ColorSlider colorType="tertiary" /> :
                                editorCurrentlyOpen === "chestLogo" ? <LogoSlider logoLocation="chestLogo" /> :
                                    console.error('There is probably a state issue.')
            }
        </ul>
    )
}

export default HorizontalSlider