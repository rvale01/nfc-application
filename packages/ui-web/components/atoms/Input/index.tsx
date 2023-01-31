import React, { forwardRef } from 'react'
import { inputBase } from './style';

export interface Input {
    defaultValue?: string;
    placeholder: string;
    disabled?: boolean;
    type?: 'text' | 'email' | 'password' | "date" //TODO: add others
}

export const Input = forwardRef(({ defaultValue, type, placeholder, disabled = false}:Input, ref) => {
    return (
        <input
            // @ts-ignore
            ref={ref}
            defaultValue={defaultValue}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            style={inputBase}
        />
    )
})

Input.displayName = "Input"