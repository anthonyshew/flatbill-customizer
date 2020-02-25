import React from 'react'
import SliderItem from '../SliderItem'

import useStateValue from '../../lib/hooks/useStateValue'

import SVG from '../SVG'

const ModelSlider = ({ ...props }) => {

    const [, dispatch] = useStateValue()

    const modelOptions = [{
        modelId: "solid",
        modelDisplayName: "Solid"
    },
    {
        modelId: "solid-accent",
        modelDisplayName: "Solid (Accent)"
    },
    {
        modelId: "striper",
        modelDisplayName: "Striper"
    },
    {
        modelId: "blockhead",
        modelDisplayName: "Blockhead"
    },
    {
        modelId: "piper",
        modelDisplayName: "Piper"
    },
    {
        modelId: "armbar",
        modelDisplayName: "Armbar"
    },
    {
        modelId: "sideswipe",
        modelDisplayName: "Sideswipe"
    },
    {
        modelId: "stripehead",
        modelDisplayName: "Stripehead"
    },
    {
        modelId: "5-star",
        modelDisplayName: "5 Star"
    }
    ]

    return (
        <>
            {modelOptions.map(elem => {
                return (
                    <SliderItem
                        key={elem.modelId}
                        image={<SVG name={`${elem.modelId}-front`} className="avatar" />}
                        text={elem.modelDisplayName}
                        handleClick={() => dispatch({
                            type: "MODEL_SELECT",
                            model: elem.modelId
                        })}
                    />
                )
            })}
        </>
    )
}

export default ModelSlider