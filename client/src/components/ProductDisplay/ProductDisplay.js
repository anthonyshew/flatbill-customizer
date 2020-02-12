import React from 'react'
import './_ProductDisplay.scss'
import useStateValue from '../../lib/hooks/useStateValue'

import SVG from '../SVG'
import ChestLogo from '../lib/ChestLogo'
import LastNameExample from '../lib/LastNameExample'
import NumberDisplay from '../lib/NumberDisplay'

const ProductDisplay = ({ ...props }) => {

    const [{ number, model, view }] = useStateValue()

    return (
        <div className="product-display">
            {<SVG name={model + "-" + view} alt={'shut'} title={'up'} desc='please' /> ?? "Look at my product!"}
            {view === "front" ? <ChestLogo className="chest-logo" shadow /> : null}
            {view === "front" && number.front ? <NumberDisplay className="jersey-number-front" /> : null}
            {view === "back" ? <NumberDisplay display className="jersey-number-front" fontSize="18px" /> : null}
            {view === "back" ? <LastNameExample display className="jersey-number-front" fontSize="8px" /> : null}
        </div>
    )
}

export default ProductDisplay