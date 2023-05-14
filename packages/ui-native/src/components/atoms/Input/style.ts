import { StyleSheet } from "react-native";
import { colors } from "../../../../assets/theme/colors";
import { fontSize } from "../../../../assets/theme/font";

export const text = () => StyleSheet.create({
    base: {
        color: colors.placeholder,
        fontSize: fontSize.standard,
        padding: 10,
        borderColor: 'transparent'
    },
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