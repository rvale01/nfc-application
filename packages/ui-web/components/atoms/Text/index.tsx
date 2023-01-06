import React from 'react'
import { colors } from '../../../../theme/colors'
import { textStyle } from './style'
export interface TextI {
    fontWeight?: 'bold' | 'normal'
    size?: 'large' | 'medium' | 'small' | 'standard'
    color?: keyof typeof colors
    text: string
}
export const Text = ({ text, color, fontWeight = 'normal', size = 'standard'}: TextI) => {
    return (
        <div
            style={textStyle({color, fontWeight, size})}
        >
            {text}
        </div>
    )
}