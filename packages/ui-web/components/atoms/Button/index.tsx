import * as React from "react";
import { Button as ButtonEl} from "./style";
export interface ButtonI {
    label: string;
    disabled?: boolean;
    type?: 'link' | 'primary' | 'secondary' | 'danger';
    onClick: () => void;
}

export const Button = ({label, disabled = false, type = 'primary', onClick}:ButtonI) => {
    return (
        // @ts-ignore
        <ButtonEl
            disabled={disabled}
            onClick={onClick}
            type={type}
        >
            {label}
        </ButtonEl>
    )
}