import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { Switch } from 'react-native-paper';

export interface ToggleI {
  defaultChecked: boolean;
  checked?: boolean;
  onChange?: (isChecked: boolean) => void;
}

export const Toggle = forwardRef(
  ({ defaultChecked, onChange, checked }: ToggleI, ref) => {
    const [isChecked, setChecked] = useState<boolean>(defaultChecked);

    useEffect(()=> {
        setChecked(checked)
    }, [checked])

    const handleChange = (value: boolean) => {
      setChecked(value);
      onChange?.(value);
    };

    useImperativeHandle(ref, () => ({
      getChecked: () => checked,
    }));

    return (
      <Switch
        value={isChecked}
        onValueChange={handleChange}
      />
    );
  }
);

Toggle.displayName = "Toggle";
