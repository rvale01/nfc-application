import React, { useState } from 'react';

interface OptionsI {
    key: string;
    label: string;
}
interface SelectI {
  options: OptionsI[];
  onChange: (value: string) => void;
  defaultSelected?: string
}

export const Select = ({ options, onChange, defaultSelected }: SelectI) => {
  const [selectedOption, setSelectedOption] = useState(defaultSelected);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // @ts-ignore
    setSelectedOption(event.target.value);
    // @ts-ignore
    onChange(event.target.value);
  };

  return (
    <select onChange={handleChange} placeholder="Select">
      {options.map(option => (
        <option key={option.key} value={option.key}>
          {option.label}
        </option>
      ))}
    </select>
  );
};



