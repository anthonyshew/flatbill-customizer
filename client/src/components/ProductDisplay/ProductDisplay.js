import React from 'react'
import './_ProductDisplay.scss'
import useStateValue from '../../lib/hooks/useStateValue'

import SVG from '../SVG'
import ChestLogo from '../lib/ChestLogo'

const ProductDisplay = ({ ...props }) => {

    const [{ model, view }] = useStateValue()

    return (
        <div className="product-display">
            {<SVG name={model + "-" + view} alt={'shut'} title={'up'} desc='please' /> ?? "Look at my product!"}
            {view === "front" ? <ChestLogo className="chest-logo" /> : null}
        </div>
    )
}

export default ProductDisplay