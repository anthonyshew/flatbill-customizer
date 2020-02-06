import React from 'react'
import './_ProductDisplay.scss'

import SVG from '../SVG/SVG'

const ProductDisplay = ({ model, ...props }) => {
    return (
        <div className="product-display">
            {<SVG name={model} /> ?? "Look at my product!"}
        </div>
    )
}

export default ProductDisplay