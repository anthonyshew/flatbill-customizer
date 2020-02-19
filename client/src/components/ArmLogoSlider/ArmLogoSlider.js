import React, { useState } from 'react'
import './_ArmLogoSlider.scss'
import SliderItem from '../SliderItem'

import useStateValue from '../../lib/hooks/useStateValue'

import SVG from '../SVG'

const ArmLogoSlider = ({ ...props }) => {

    const [, dispatch] = useStateValue()

    const [imgSrc, setImgSrc] = useState("/media/platypus.png")

    const handleUpload = (e) => {
        let input = e.target
        let reader = new FileReader()

        reader.onload = () => setImgSrc(reader.result)
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
                image={<img id="someImg" className="avatar sleeve-logo" src={imgSrc} alt="fix me!" />}
                text="Current"
            />
        </>
    )
}

export default ArmLogoSlider