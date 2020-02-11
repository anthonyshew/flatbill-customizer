import React from 'react'
import './_ProductDisplay.scss'
import useStateValue from '../../lib/hooks/useStateValue'

import SVG from '../SVG/SVG'

const ProductDisplay = ({ ...props }) => {

    const [{ model, view, chestLogo }] = useStateValue()

    return (
        <div className="product-display">
            {<SVG name={model + "-" + view} alt={'shut'} title={'up'} desc='please' /> ?? "Look at my product!"}
            <p
                className="chest-logo"
                style={{
                    maxWidth: "150px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    padding: "1px",
                    fontFamily: chestLogo.fontFamily,
                    fontSize: chestLogo.fontSize + "px"
                }}>
                {chestLogo.text}
            </p>
        </div>
    )
}

export default ProductDisplay