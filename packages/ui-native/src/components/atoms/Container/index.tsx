import React from "react";
import { View } from "react-native";
import { colors } from "../../../../assets/theme/colors";
import { container as containerStyle} from "./style";

interface Container {
    shadow?: boolean;
    children: React.ReactNode;
    background?: keyof typeof colors;
    width?: string;
    height?: string;
    padding?: 30;
}
export const Container = ({background = 'transparent', shadow = false, width = '100%', height = '100%', padding, children}: Container) => {
    return (
        <View style={containerStyle(background, shadow, width, height, padding).base}>
            {children}
        </View>
    )
}