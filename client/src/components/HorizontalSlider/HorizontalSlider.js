import React, { useEffect } from 'react'
import './_HorizontalSlider.scss'
import FontPicker from 'font-picker-react'
import useStateValue from '../../lib/hooks/useStateValue'

import DefaultSlider from '../DefaultSlider'
import ModelSlider from '../ModelSlider'
import ColorSlider from '../ColorSlider'
import LogoSlider from '../LogoEditor'

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
                                editorCurrentlyOpen === "chestLogo" ? <LogoSlider logoLocation="chestLogo" /> :
                                    editorCurrentlyOpen === "fontPickerChest" ? <FontPicker
                                        apiKey="AIzaSyC3bkG4lNevY9wZ7LXAyLOwUyFUgpyq4fw"
                                        activeFontFamily={chestLogo.fontFamily}
                                        families={["Lobster",
                                            "Lemonada",
                                            "Odibee Sans",
                                            "Modak",
                                            "Galada",
                                            "Righteous",
                                            "Patua One",
                                            "Luckiest Guy",
                                            "Passion One",
                                            "Alfa Slab One",
                                            "Bangers",
                                            "Monoton",
                                            "Baloo Bhai",
                                            "Sigmar One",
                                            "PLayball",
                                            "Chewy",
                                            "Black Ops One",
                                            "Boogaloo",
                                            "Shrikhand",
                                            "Racing Sans One",
                                            "Shojumaru",
                                            "Bungee",
                                            "Graduate",
                                            "Turret Road",
                                            "McLaren",
                                            "Spicy Rice",
                                            "Limelight",
                                            "Bowlby One",
                                            "Ranchers",
                                            "Creepster",
                                            "Ewert",
                                            "Peralta",
                                            "Germania One",
                                            "Sarina",
                                            "Trade Winds",
                                            "Pirata One",
                                            "Uncial Antiqua",
                                            "Smokum",
                                            "Iceberg",
                                            "Caesar Dressing",
                                            "Mrs Sheppards",
                                            "Permanent Marker",
                                            "Marck Script",
                                            "Yellowtail",
                                            "VT323",
                                            "Oswald",
                                            "Anton",
                                            "Arvo",
                                            "Acme",
                                            "Monsterrat Subrayada",
                                        ]}
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