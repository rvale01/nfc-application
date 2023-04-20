import { StyleSheet } from "react-native";
import { colors } from "../../../../assets/theme/colors";
import { fontSize } from "../../../../assets/theme/font";

export const text = () => StyleSheet.create({
    base: {
        color: colors.placeholder,
        fontSize: fontSize.standard,
        position: 'absolute',
        padding: 10,
    },
    onFocus: {
        bottom: '70%',
        backgroundColor: colors.white,
        padding: 5,
        marginLeft: 15
    }
})

export const container = () => StyleSheet.create({
    base: {
        // borderColor: colors.placeholder,
        // borderWidth: 1,
        // borderStyle: 'solid',
        // padding: 10
    }
})

export const input = () =>StyleSheet.create({
    base: {
        padding: 10,
        outlineColor: colors.placeholder,
        outlineWidth: 0,

        borderColor: colors.placeholder,
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 10
    }
})