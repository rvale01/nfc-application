import React from "react";
import { Pressable, Text } from "react-native";
import { button as buttonStyle, text as textStyle } from './style'

interface ButtonI {
    label: string;
    type?: 'primary' | 'secondary' | 'danger' | 'link';
    onPress: ()=> void;
    roundedStyle? : 'rounded' | 'semiRounded'
    isLoading?: boolean; 
}

export const Button = ({label, onPress, type = 'primary', roundedStyle ='rounded', isLoading}: ButtonI) => {
    return (
        <Pressable onPress={onPress} style={[buttonStyle[type], buttonStyle.base, buttonStyle[roundedStyle]]} disabled={isLoading}>
            <Text style={[textStyle[type], textStyle.base]}>
                {isLoading ? "Loading..." : label}
            </Text>
        </Pressable>
    )
}