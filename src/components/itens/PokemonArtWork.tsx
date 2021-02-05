import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { ImageBox, ImageBoxNoFlex } from "../../styles/styles";





export function PokemonArtWork({ artworkUrl }: any) {

    return (
        <ImageBox >
            <Image
                style={{ width: 130, height: 130 }}
                source={{ uri: artworkUrl }}
            />
        </ImageBox>
    );
}


export function PokemonArtWorkSmall({ artworkUrl }: any) {

    return (
        <ImageBoxNoFlex >
            <Image
                style={{ width: 125, height: 125 }}
                source={{ uri: artworkUrl }}
            />
        </ImageBoxNoFlex>
    );
}




