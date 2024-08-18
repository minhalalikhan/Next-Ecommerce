"use client"
import React from 'react'

type Props = {
    Text: string,
    onclick?: () => void,
    className?: string,
    style?: Object
}

function Button({ Text = '', onclick, className, style }: Props) {
    return (
        <div
            className={ `w-full flex items-center justify-center p-1 ${className}` }
            style={ style }
            onClick={ onclick }>
            { Text }
        </div>
    )
}

export default Button