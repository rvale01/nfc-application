import React from "react";
import { ScrollView, useWindowDimensions, View } from "react-native";

interface CarouselI {
    children: React.ReactElement[]
}

export const Carousel = ({children}: CarouselI) => {
    const { width } = useWindowDimensions();
    return (
             <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            >
                {children.map((el, i)=> {
                    return (
                        <View style={{width: width}} key={i}>
                            {el}
                        </View>
                    )
                })}
            </ScrollView>
    )
}