import React from 'react'
import './_ProductDisplay.scss'
import useStateValue from '../../lib/hooks/useStateValue'

import SVG from '../SVG/SVG'

const ProductDisplay = ({ ...props }) => {

    const [{ model, view }] = useStateValue()

    return (
        <div className="product-display">
            {<SVG name={model + "-" + view} alt={'shut'} title={'up'} desc='please' /> ?? "Look at my product!"}
        </div>
    )
}

export default ProductDisplay