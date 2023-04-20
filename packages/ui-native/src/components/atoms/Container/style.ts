import { StyleSheet } from "react-native";
import { colors } from "../../../../assets/theme/colors";

export const container = (backgroundColor: keyof typeof colors, shadow: boolean, width: string, height: string, padding?: number) => {
    return StyleSheet.create({
        base: {
            //shadow
            width: width,
            height:height,
            backgroundColor: colors[backgroundColor],
            padding: padding
        }
    })
}