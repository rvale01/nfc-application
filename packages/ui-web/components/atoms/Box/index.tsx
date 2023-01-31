import React from 'react'
import { flexDirectionI, gapI, horizontalAlignI, verticalAlignI} from '../../../theme/layout'
import { Box as BoxItem } from './style'

export interface BoxI {
    direction: flexDirectionI
    verticalAlign?: verticalAlignI;
    horizontalAlign?: horizontalAlignI;
    children: React.ReactNode;
    gap?: keyof typeof gapI;
    height?: string | number;
    width?: string | number;
    responsive?: boolean;
}

export const Box = ({children, direction, gap, verticalAlign, horizontalAlign, width, height, responsive=true}: BoxI) => {
    return (
        <BoxItem responsive={responsive} direction={direction} gap={gap} verticalAlign={verticalAlign} horizontalAlign={horizontalAlign} width={width} height={height}>
            {children}
        </BoxItem>
    )
}