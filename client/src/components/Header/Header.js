import React from 'react'
import './_Header.scss'

import SVG from '../SVG'

const Header = ({ ...props }) => {
    return (
        <div className="header">
            <h1 className="h1">Flatbill Customizer</h1>
            <SVG name="platypus" className="platypus" />
        </div>
    )
}

export default Header