import { StyleSheet } from "react-native";
import { horizontalAlignI, verticalAlignI, flexDirectionI, gapI } from "../../../../assets/theme/layout";

interface boxI {
    verticalAlign?: verticalAlignI,
    horizontalAlign?: horizontalAlignI,
    width: string,
    height: string,
    direction: flexDirectionI
}
export const box = ({verticalAlign, horizontalAlign, width, height, direction}: boxI) => StyleSheet.create({
    base: {
        display: 'flex',
        alignContent: horizontalAlign,
        justifyContent: verticalAlign,
        width: width,
        height: height,
        flexDirection: direction,
    },
})

interface childrenI {
    direction: flexDirectionI,
    gap?: keyof typeof gapI
}

export const children = ({direction, gap}: childrenI) => StyleSheet.create({
    child: {
        marginBottom: direction === 'column' && gap ? gapI[gap] : 0,
        marginRight: direction === 'row' && gap ? gapI[gap] : 0,
    }
})
