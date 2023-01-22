import React from 'react'
import { colors } from '../../../theme/colors';
import { borderRadiusI, paddingI } from '../../../theme/layout';
import { containerStyle } from './style'
export interface ContainerI {
    children: React.ReactNode
    background?: keyof typeof colors;
    height?: string | number;
    width?: string | number;
    padding?: keyof typeof paddingI;
    showShadow?: boolean;
    borderRadius?: keyof typeof borderRadiusI;
}

export const Container = ({children, background, width, height, padding, showShadow, borderRadius}: ContainerI) => {
    return (
        // @ts-ignore
        <div style={containerStyle({width, height, background, padding, showShadow, borderRadius})}>
            {children}
        </div>
    )
}

