import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './_HorizontalSlider.scss'

const HorizontalSlider = ({ }) => {

    const [stuff] = useState(['thing', 'another thing', 'anotherrrrr thing', 'butt', 'butt stuff'])

    return (
        <ul className="product-slider">
            {
                stuff.map(elem => {
                    return (
                        <li className="container-product" key={elem} title={`Head to the ${elem} product page.`}>
                            {elem}
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default HorizontalSlider