import { StyleSheet } from "react-native";
import { colors } from "../../../../assets/theme/colors";
import { fontSize as sizes, fontWeight as weights } from "../../../../assets/theme/font";

export const text = (color: keyof typeof colors, fontWeight: keyof typeof weights, fontSize: keyof typeof sizes, textAlign) => {
    return StyleSheet.create({
        base: {
            color: colors[color],
            fontWeight: weights[fontWeight],
            fontSize: sizes[fontSize],
            textAlign: textAlign
        }
    })
}