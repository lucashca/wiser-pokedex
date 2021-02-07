import React from "react";
import { useState } from "react";
import { Image } from "react-native";
import { POKEMON_ITEM_HEIGHT } from "../../../global";
import { COLOR_TEXT_GRAY } from "../../styles/colors";
import { ImageBox, ImageBoxNoFlex, Loading } from "../../styles/styles";





export function PokemonArtWork({ artworkUrl, height = 130, width = 130, justifyContent = 'flex-end' }: any) {
    const [load, setLoad] = useState<boolean>(false);
    return (
        <ImageBox style={{ justifyContent }}>
            <Image
                style={{ width, height, zIndex: 10 }}
                source={{ uri: artworkUrl }}
                onLoadStart={() => setLoad(true)}
                onLoadEnd={() => { setLoad(false); }}
            />
            { load &&
                <Loading style={{ position: 'absolute', width, height }} size="large" color={COLOR_TEXT_GRAY} />
            }
        </ImageBox>
    );
}


export function PokemonArtWorkSmall({ artworkUrl, height = 125, width = 125 }: any) {
    const [load, setLoad] = useState<boolean>(false);
    return (
        <ImageBoxNoFlex >
            <Image
                style={{ width, height, zIndex: 10 }}
                source={{ uri: artworkUrl }}
                onLoadStart={() => setLoad(true)}
                onLoadEnd={() => { setLoad(false); }}
            />
            { load &&
                <Loading style={{ position: 'absolute', width, height }} size="large" color={COLOR_TEXT_GRAY} />
            }
        </ImageBoxNoFlex>
    );
}




