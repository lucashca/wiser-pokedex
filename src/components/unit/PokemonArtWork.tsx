import React from "react";
import { Image } from "react-native";
import { ImageBox, ImageBoxNoFlex } from "../../styles/styles";





export function PokemonArtWork({ artworkUrl, height = 130, width = 130, justifyContent = 'flex-end' }: any) {

    return (
        <ImageBox style={{ justifyContent }}>
            <Image
                style={{ width, height }}
                source={{ uri: artworkUrl }}
            />
        </ImageBox>
    );
}


export function PokemonArtWorkSmall({ artworkUrl, height = 125, width = 125 }: any) {

    return (
        <ImageBoxNoFlex >
            <Image
                style={{ width, height }}
                source={{ uri: artworkUrl }}
            />
        </ImageBoxNoFlex>
    );
}




