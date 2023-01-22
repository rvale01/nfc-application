import React from "react";
import { Switch } from 'antd';

interface ToggleI {
    defaultChecked: boolean;
    unCheckedText: string;
    checkedText: string;
    onChange: (checked: boolean) => void;
}
export const Toggle = ({ checkedText, defaultChecked, unCheckedText, onChange}: ToggleI) => {
    return (
        <Switch
            defaultChecked={defaultChecked}
            checkedChildren={checkedText}
            unCheckedChildren={unCheckedText}
            onChange={onChange}
        />
    )
}