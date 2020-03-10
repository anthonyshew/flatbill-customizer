import React from 'react'
import './_ProductDisplay.scss'
import useStateValue from '../../../lib/hooks/useStateValue'

import SVG from '../../SVG'
import ChestLogo from '../lib/ChestLogo'
import LastNameExample from '../lib/LastNameExample'
import NumberDisplay from '../lib/NumberDisplay'

const ProductDisplay = ({ view }) => {

    const [{ number, model }] = useStateValue()

    return (
        <div className="product-display">
            {<SVG name={model + "-" + view} />}
            {view === "front" ? <ChestLogo className="chest-logo" shadow /> : null}
            {view === "front" && number.front ? <NumberDisplay className="jersey-number-front" /> : null}
            {view === "back" ? <NumberDisplay display className="jersey-number-back" fontSize={number.fontSize * 2} /> : null}
            {view === "back" ? <LastNameExample display className="jersey-name-back" fontSize="24px" /> : null}
        </div>
    )
}

export default ProductDisplay