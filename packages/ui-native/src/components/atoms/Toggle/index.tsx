import React from 'react';
import { Switch } from 'react-native-paper';

export interface ToggleI {
    checked: boolean,
    onChange: (isChecked: boolean) => void
}
export const Toggle = ({ checked, onChange }: ToggleI) => {
    
    return (
        <Switch
            value={checked} 
            onValueChange={onChange}
        />
    );
  };