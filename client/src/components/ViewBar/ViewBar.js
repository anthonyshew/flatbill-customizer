import React from 'react'
import './_ViewBar.scss'
import useStateValue from '../../lib/hooks/useStateValue'

import Button from '../Button'

const ViewBar = ({ ...props }) => {

    const [{ view }, dispatch] = useStateValue()

    const handleClick = () => {
        dispatch({
            type: "flipView",
            newView: view === 'front' ? 'back' : 'front'
        })
    }

    return (
        <div className="viewbar">
            <Button className="view-toggle"
                text={view === 'front' ? "Front View" : "Back View"}
                onClick={handleClick} />
        </div>

    )
}

export default ViewBar