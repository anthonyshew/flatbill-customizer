import React, { useEffect } from 'react'
import './_HorizontalSlider.scss'
import FontPicker from 'font-picker-react'
import useStateValue from '../../lib/hooks/useStateValue'
import fonts from '../lib/fonts'

import DefaultSlider from '../DefaultSlider'
import ModelSlider from '../ModelSlider'
import ColorSlider from '../ColorSlider'
import LogoEditor from '../LogoEditor'
import NumberEditor from '../NumberEditor'

const HorizontalSlider = ({ ...props }) => {

    const [{ editorCurrentlyOpen, chestLogo }, dispatch] = useStateValue()

    useEffect(() => {
        document.getElementById("horizontalSlider").scrollLeft = 0
    }, [editorCurrentlyOpen])

    return (
        <ul id="horizontalSlider" className="horizontal-slider">
            {editorCurrentlyOpen === "defaultMenu" ? <DefaultSlider /> :
                editorCurrentlyOpen === "models" ? <ModelSlider /> :
                    editorCurrentlyOpen === "primaryColor" ? <ColorSlider colorType="primary" /> :
                        editorCurrentlyOpen === "secondaryColor" ? <ColorSlider colorType="secondary" /> :
                            editorCurrentlyOpen === "tertiaryColor" ? <ColorSlider colorType="tertiary" /> :
                                editorCurrentlyOpen === "chestLogo" ? <LogoEditor logoLocation="chestLogo" /> :
                                    editorCurrentlyOpen === "numberEditor" ? <NumberEditor /> :
                                        editorCurrentlyOpen === "fontPickerNumber" ? <FontPicker
                                            apiKey="AIzaSyC3bkG4lNevY9wZ7LXAyLOwUyFUgpyq4fw"
                                            activeFontFamily={chestLogo.fontFamily}
                                            families={fonts}
                                            onChange={nextFont => dispatch({
                                                type: "NUMBER_FONT_CHANGE",
                                                newFont: nextFont.family
                                            })} /> :
                                            editorCurrentlyOpen === "fontPickerChest" ? <FontPicker
                                                apiKey="AIzaSyC3bkG4lNevY9wZ7LXAyLOwUyFUgpyq4fw"
                                                activeFontFamily={chestLogo.fontFamily}
                                                families={fonts}
                                                onChange={nextFont => dispatch({
                                                    type: "LOGO_FONT_CHANGE",
                                                    newFont: nextFont.family
                                                })} /> :
                                                console.error('There is probably a state issue.')
            }
        </ul>
    )
}

export default HorizontalSlider