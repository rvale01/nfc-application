import React from 'react'
import { colors } from '../../../theme/colors'
import { fontSize } from '../../../theme/text'
import { Text as TextEl } from './style'
export interface TextI {
    fontWeight?: 'bold' | 'normal'
    size?: keyof typeof fontSize,
    color?: keyof typeof colors
    text: string,
    textAlign?: 'center'
}
export const Text = ({ text, color = 'primary', fontWeight = 'normal', size = 'medium', textAlign}: TextI) => {
    return (
        <TextEl
            color={color}
            fontWeight={fontWeight}
            size={size}
            textAlign={textAlign}
        >
            {text}
        </TextEl>
    )
}