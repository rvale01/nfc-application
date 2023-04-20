import React from "react";
import { Text as RNText} from "react-native";
import { text as textStyle } from './style'

interface TextI{
    size?: 'title' | 'standard'
    color?: 'primary' | 'white' 
    text: string,
    fontWeight?: 'bold' | 'normal',
    align?: 'auto' | 'center'
}

export const Text = ({ color = 'primary', size = "standard", text, fontWeight = 'normal', align='auto'}: TextI) => {
    return (
        <RNText style={textStyle(color, fontWeight, size, align).base}>
            {text}
        </RNText>
    )
}