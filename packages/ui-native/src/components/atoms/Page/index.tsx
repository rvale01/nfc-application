import React from "react";
import { SafeAreaView } from "react-native";
import { colors } from "../../../../assets/theme/colors";

interface PageI {
    background?: keyof typeof colors;
    children: React.ReactNode
}
export const Page = ({ background, children}: PageI) => {
    return (
        <SafeAreaView style={{backgroundColor: background? colors[background]: ''}}>
            {children}
        </SafeAreaView>
    )
}