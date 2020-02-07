import React from 'react'
import './_Button.scss'

const Button = ({
    className,
    text,
    backgroundColor,
    border,
    borderRadius,
    onClick,
    padding,
    ...props }) => {
    return (
        <>
            <button
                onClick={onClick}
                className={`button${className ? " " + className : ""}`}
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