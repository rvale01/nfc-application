import React, { forwardRef } from 'react'
import { Input as InputEl } from './style';

export interface Input {
    defaultValue?: string;
    placeholder: string;
    disabled?: boolean;
    onBlur?: ({value, name}: {value: string, name: string}) => void;
    name?: string;
    type?: 'text' | 'email' | 'password' | "date" //TODO: add others
}

export const Input = forwardRef(({ defaultValue, name, type, placeholder, onBlur, disabled = false}:Input, ref) => {
    return (
        <InputEl
            // @ts-ignore
            ref={ref}
            name={name}
            defaultValue={defaultValue}
            // @ts-ignore
            onBlur={(e) => onBlur({value: e.target.value, name: e.target.name ?? ''})}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
        />
    )
})

Input.displayName = "Input"