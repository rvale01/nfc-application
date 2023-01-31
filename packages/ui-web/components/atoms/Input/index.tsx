import React, { forwardRef } from 'react'
import { Input as InputEl } from './style';

export interface Input {
    defaultValue?: string;
    placeholder: string;
    disabled?: boolean;
    type?: 'text' | 'email' | 'password' | "date" //TODO: add others
}

export const Input = forwardRef(({ defaultValue, type, placeholder, disabled = false}:Input, ref) => {
    return (
        <InputEl
            // @ts-ignore
            ref={ref}
            defaultValue={defaultValue}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
        />
    )
})

Input.displayName = "Input"