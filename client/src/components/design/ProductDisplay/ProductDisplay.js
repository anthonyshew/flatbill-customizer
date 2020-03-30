import React from 'react'
import './_ProductDisplay.scss'
import useStateValue from '../../../lib/hooks/useStateValue'

import SVG from '../../SVG'
import ChestLogo from '../lib/ChestLogo'
import LastNameExample from '../lib/LastNameExample'
import NumberDisplay from '../lib/NumberDisplay'

const ProductDisplay = ({ view, receiptProduct }) => {

    const [{ number, model }] = useStateValue()

    return (
        <div className="product-display">
            {<SVG name={receiptProduct ? receiptProduct.model + "-" + view : model + "-" + view} receiptPrimaryColor={receiptProduct ? receiptProduct.primaryColor : null} receiptSecondaryColor={receiptProduct ? receiptProduct.secondaryColor : null} receiptTertiaryColor={receiptProduct ? receiptProduct.tertiaryColor : null} />}
            {view === "front" ? <ChestLogo className="chest-logo" shadow receiptProduct={receiptProduct ? receiptProduct : null} /> : null}
            {view === "front" && number.front ? <NumberDisplay className="jersey-number-front" receiptProduct={receiptProduct ? receiptProduct : null} /> : null}
            {view === "back" ? <NumberDisplay display className="jersey-number-back" fontSize={number.fontSize * 2} receiptProduct={receiptProduct ? receiptProduct : null} /> : null}
            {view === "back" ? <LastNameExample display className="jersey-name-back" fontSize="24px" receiptProduct={receiptProduct ? receiptProduct : null} /> : null}
        </div>
    )
}

export default ProductDisplay