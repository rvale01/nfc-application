import React from 'react'
import { colors } from '../../../theme/colors';
import { borderRadiusI, paddingI } from '../../../theme/layout';
import { Container as ContainerEl } from './style'
export interface ContainerI {
    children: React.ReactNode
    background?: keyof typeof colors;
    height?: string | number;
    width?: string | number;
    padding?: keyof typeof paddingI;
    showShadow?: boolean;
    borderRadius?: keyof typeof borderRadiusI;
    minWidth?: string;
}

export const Container = (props: ContainerI) => {
    return (
        <ContainerEl {...props}>
            {props.children}
        </ContainerEl>
    )
}

