import { StyleSheet } from "react-native";
import { colors } from "../../../../assets/theme/colors";
import { fontWeight } from "../../../../assets/theme/font"

export const button = StyleSheet.create({
    primary: {
        backgroundColor: colors.primary,
    },
    secondary: {
        backgroundColor: colors.white,
    },
    danger: {
        backgroundColor: colors.danger,
    },
    link: {
        backgroundColor: colors.transparent,
    },
    base: {
        border: '1px solid transparent',
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 20,
        paddingRight: 20,
        alignSelf: 'center',
        textAlign: 'center',
    },
    rounded: {
        borderRadius: 30,
    },
    semiRounded: {
        borderRadius: 12,
    }
})

export const text = StyleSheet.create({
    primary: {
        color: colors.white,
    },
    secondary: {
        color: colors.primary,
    },
    danger: {
        color: colors.white,
    },
    link: {
        color: colors.link,
        textDecorationLine: 'underline'
    },
    base: {
        fontWeight: fontWeight.bold,
    }
})