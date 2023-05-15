import React, { useState, forwardRef, useImperativeHandle, Ref } from "react";
import { Switch } from "antd";

export interface ToggleI {
  defaultChecked: boolean;
  unCheckedText?: string;
  checkedText?: string;
  onChange?: (checked: boolean) => void;
}

export const Toggle = forwardRef(
  (
    { checkedText, defaultChecked, unCheckedText, onChange }: ToggleI,
    ref: Ref<any>
  ) => {
    const [checked, setChecked] = useState<boolean>(defaultChecked);

    const handleChange = (value: boolean) => {
      setChecked(value);
      onChange?.(value);
    };

    useImperativeHandle(ref, () => ({
      getChecked: () => checked,
    }));

    return (
      <Switch
        defaultChecked={defaultChecked}
        checkedChildren={checkedText}
        unCheckedChildren={unCheckedText}
        onChange={handleChange}
      />
    );
  }
);
