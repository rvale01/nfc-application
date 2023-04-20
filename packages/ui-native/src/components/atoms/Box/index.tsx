import React from 'react'
import { View } from 'react-native'
import { box as boxStyle, children as childrenStyle } from './style'
import { flexDirectionI, gapI, horizontalAlignI, verticalAlignI} from '../../../../assets/theme/layout'
interface BoxI {
    verticalAlign?:verticalAlignI, //"flex-start" | 'flex-end' |  "start" | "end" | self-start | self-end
    horizontalAlign?: horizontalAlignI, //'flex-end' | 'flex-start' | 'space-between' | 'space-around' | 'space-evenly'
    gap?: keyof typeof gapI,
    children: React.ReactElement | React.ReactElement[],
    width?: string;
    direction?: flexDirectionI,
    height?: string;
}

export const Box = ({ horizontalAlign, verticalAlign, gap, width = '100%', height = '100%', direction = 'row', children}: BoxI) => {
    return (
        <View style={boxStyle({verticalAlign, horizontalAlign, width, height, direction}).base}>
            {Array.isArray(children) && children.length > 0 ? children.map((el, index)=> {
                if(index === (children.length - 1)){
                    return el 
                }else {
                    return(
                        <View style={childrenStyle({direction, gap}).child} key={index}>
                            {el}
                        </View>
                    )
                }
            })
            : children
            }
        </View>
    )
}