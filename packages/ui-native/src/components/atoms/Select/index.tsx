import React from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './style'

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  options: Option[];
  selectedValue: string;
  onValueChange: (value: string) => void;
  style?: object;
}

export const Select: React.FC<SelectProps> = ({
  options,
  selectedValue,
  onValueChange,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={onValueChange}>
        {options.map((option) => (
          <Picker.Item
            key={option.value}
            label={option.label}
            value={option.value}
          />
        ))}
      </Picker>
    </View>
  );
};
