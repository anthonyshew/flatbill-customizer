import React from 'react'
import './_ArmLogoSlider.scss'
import SliderItem from '../SliderItem'

import useStateValue from '../../lib/hooks/useStateValue'

import SVG from '../SVG'

const ArmLogoSlider = ({ side }) => {

    const [{ leftArmLogo, rightArmLogo }, dispatch] = useStateValue()

    const handleUpload = (e) => {
        let input = e.target
        let reader = new FileReader()

        reader.onload = () => {
            if (side === 'left') {
                dispatch({ type: "LEFT_SLEEVE_LOGO", url: reader.result })
            }
            if (side === 'right') {
                dispatch({ type: "RIGHT_SLEEVE_LOGO", url: reader.result })
            }
        }
        reader.readAsDataURL(input.files[0])
    }

    return (
        <>
            <SliderItem
                image={<SVG name="arrow-left" className="avatar" alt="Back to top menu." />}
                text="Back"
                handleClick={() => dispatch({ type: "EDITOR_CHANGE", menu: "defaultMenu" })}
            />
            <input type="file" id="leftArmLogoImage" onChange={handleUpload} />
            <SliderItem
                image={<img className="avatar sleeve-logo" src={side === 'left' ? leftArmLogo : rightArmLogo} alt={`${side === 'left' ? "Left" : "Right"} arm sleeve logo.`} />}
                text="Current"
            />
        </>
    )
}

export default ArmLogoSlider