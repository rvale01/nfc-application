import React, { forwardRef } from 'react'

export interface Input {
    defaultValue: string;
    placeholder: string;
    disabled?: boolean;
    type?: 'text' //TODO: add others
}

export const Input = forwardRef(({ defaultValue, type, placeholder, disabled = false}:Input, ref) => {
    return (
        <input
            ref={ref}
            defaultValue={defaultValue}
            type={type}
        />
    )
})

Input.displayName = "Input"