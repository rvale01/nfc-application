import React from 'react'
import { colors } from '../../../theme/colors';
import { flexDirectionI, gapI, horizontalAlignI, verticalAlignI} from '../../../theme/layout'
import { boxStyle } from './style'

export interface BoxI {
    direction: flexDirectionI
    verticalAlign?: verticalAlignI;
    horizontalAlign?: horizontalAlignI;
    children?: React.ReactNode[] | React.ReactNode;
    gap?: keyof typeof gapI;
    height?: string | number;
    width?: string | number;
}

export const Box = ({children, direction, gap, verticalAlign, horizontalAlign, width, height}: BoxI) => {
    return (
        <div style={boxStyle({direction, gap, verticalAlign, horizontalAlign, width, height})}>
            {children}
        </div>
    )
}