import React, { useState } from 'react';

interface OptionsI {
    key: string;
    label: string;
}
interface SelectI {
  options: OptionsI[];
  onChange: (value: string) => void;
}

export const Select = ({ options, onChange }: SelectI) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // @ts-ignore
    setSelectedOption(event.target.value);
    // @ts-ignore
    onChange(event.target.value);
  };

  return (
    <select value={selectedOption.key} onChange={handleChange}>
      {options.map(option => (
        <option key={option.key} value={option.key}>
          {option.label}
        </option>
      ))}
    </select>
  );
};



