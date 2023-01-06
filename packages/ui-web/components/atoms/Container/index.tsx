import React from 'react'
import { colors } from '../../../theme/colors';
import { paddingI } from '../../../theme/layout';
import { containerStyle } from './style'
export interface ContainerI {
    children: React.ReactNode
    background?: keyof typeof colors;
    height?: string | number;
    width?: string | number;
    padding?: keyof typeof paddingI;
}

export const Container = ({children, background, width, height, padding}: ContainerI) => {
    return (
        // @ts-ignore
        <div style={containerStyle({width, height, background, padding})}>
            {children}
        </div>
    )
}

