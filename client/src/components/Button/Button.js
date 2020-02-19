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
    style,
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
                    padding: padding,
                    ...style
                }}>{text}</button>
        </>
    )
}

export default Button