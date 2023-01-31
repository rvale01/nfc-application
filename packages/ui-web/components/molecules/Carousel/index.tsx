import React, { useState } from "react";
import { CarouselContainer, Dot, DotsContainer } from "./style";
export interface CarouselI{
    children: React.ReactNode
}

export const Carousel = ({children}: CarouselI) => {
    const [shownIndex, setShownIndex] = useState(0)
    
    return (
        <CarouselContainer>
            <DotsContainer>
                {Array.isArray(children) && children.map((value, index) => {
                    return (
                        <Dot
                            isSelected={ shownIndex === index }
                            onClick={()=> setShownIndex(index)}
                        />
                    )
                })}
            </DotsContainer>

           {Array.isArray(children) && children[shownIndex]}
        </CarouselContainer>
    )
}