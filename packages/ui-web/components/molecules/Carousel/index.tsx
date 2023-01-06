import React, { useState } from "react";
import { carouselContainerStyle, dotsContainerStyle, dotStyle } from "./style";
export interface CarouselI{
    children: React.ReactNode
}

export const Carousel = ({children}: CarouselI) => {
    const [shownIndex, setShownIndex] = useState(0)
    
    return (
        <div style={carouselContainerStyle}>
            <div style={dotsContainerStyle}>
                {Array.isArray(children) && children.map((value, index) => {
                    return (
                        <div
                            style={dotStyle({isSelected: shownIndex === index})} 
                            onClick={()=> setShownIndex(index)}
                        />
                    )
                })}
            </div>

           {Array.isArray(children) && children[shownIndex]}
        </div>
    )
}