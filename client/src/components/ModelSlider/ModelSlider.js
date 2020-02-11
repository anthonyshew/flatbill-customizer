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
        modelId: "striper",
        modelDisplayName: "Striper"
    }
    ]

    return (
        <>
            <SliderItem
                image={
                    <SVG name="arrow-left" className="avatar" alt="Back to top menu." />
                }
                text="Back"
                handleClick={() => dispatch({ type: "EDITOR_CHANGE", menu: "defaultMenu" })}
            />
            {modelOptions.map(elem => {
                return (
                    <SliderItem
                        key={elem.modelId}
                        image={<SVG name={`${elem.modelId}-front`} className="avatar" />}
                        text={elem.modelDisplayName}
                        handleClick={() => dispatch({
                            type: "MODEL_SELECT",
                            menu: "defaultMenu",
                            model: elem.modelId
                        })}
                    />
                )
            })}
        </>
    )
}

export default ModelSlider