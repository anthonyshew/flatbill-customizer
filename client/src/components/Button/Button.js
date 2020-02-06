import React from 'react'
import './_Button.scss'

const Button = ({ text,
    backgroundColor,
    border,
    borderRadius,
    onClick,
    padding,
    ...props }) => {
    return (
        <>
            <button
                className="button"
                style={{
                    backgroundColor: backgroundColor,
                    border: border,
                    borderRadius: borderRadius,
                    padding: padding
                }}>{text}</button>
        </>
    )
}

export default Button