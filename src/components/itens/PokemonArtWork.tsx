import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { ImageBox, ImageBoxNoFlex } from "../../styles/styles";





export function PokemonArtWork({ artworkUrl, height = 130, width = 130 }: any) {

    return (
        <ImageBox >
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




