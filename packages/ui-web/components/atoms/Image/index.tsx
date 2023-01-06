import React from "react";

interface ImageI {
    src: string;
    alt: string
}
export const Image = ({alt, src}: ImageI) => {
    return (
        <img src={src} alt={alt}/>
    )
}