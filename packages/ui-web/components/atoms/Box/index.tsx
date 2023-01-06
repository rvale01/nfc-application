import React from 'react'
import { flexDirectionI, gapI, horizontalAlignI, verticalAlignI} from '../../../theme/layout'
import { boxStyle } from './style'

export interface BoxI {
    direction: flexDirectionI
    verticalAlign: verticalAlignI; //TODO: add based on needs
    horizontalAlign?: horizontalAlignI;
    children?: React.ReactNode[];
    gap: keyof typeof gapI;

}

export const Box = ({children, direction, gap, verticalAlign, horizontalAlign}: BoxI) => {
    return (
        <div style={boxStyle({direction, gap, verticalAlign, horizontalAlign})}>
            {children}
        </div>
    )
}