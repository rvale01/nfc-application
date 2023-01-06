import * as React from "react";
import { buttonStyle} from "./style";
export interface ButtonI {
    label: string;
    disabled?: boolean;
    type?: 'link' | 'primary' | 'secondary' 
    // | 'danger';
    onClick: () => void;
}

export const Button = ({label, disabled = false, type = 'primary', onClick}:ButtonI) => {
    return (
        <button
            disabled={disabled}
            style={buttonStyle({type,})}
        >{label}</button>
    )
}