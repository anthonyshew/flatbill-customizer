import React from 'react'
import './_ArmLogoSlider.scss'
import SliderItem from '../SliderItem'

import useStateValue from '../../lib/hooks/useStateValue'

import SVG from '../SVG'

const ArmLogoSlider = ({ side }) => {

    const [, dispatch] = useStateValue()

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
            <input className="file-uploader" type="file" onChange={handleUpload} />
            <SliderItem
                image={<SVG name="red-x" className="avatar" />}
                text="Remove Logo"
                handleClick={() => {
                    if (side === 'left')
                        dispatch({ type: "LEFT_SLEEVE_LOGO", url: "/media/clear.png" })

                    if (side === 'right')
                        dispatch({ type: "RIGHT_SLEEVE_LOGO", url: "/media/clear.png" })
                }}
            />
            <SliderItem
                image={side === "left" ? <img className="avatar sleeve-logo" src="/media/platypus.png" alt="Left arm sleeve logo." /> : <img className="avatar sleeve-logo" src="/media/star.png" alt="right arm sleeve logo." />}
                text="Use Default"
                handleClick={() => {
                    if (side === 'left')
                        dispatch({ type: "LEFT_SLEEVE_LOGO", url: "/media/platypus.png" })

                    if (side === 'right')
                        dispatch({ type: "RIGHT_SLEEVE_LOGO", url: "/media/star.png" })
                }}
            />
        </>
    )
}

export default ArmLogoSlider