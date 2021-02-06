import React from "react";
import { View } from "react-native";
import { PokeballSmallSvg } from "../../assets/images";
import { PokemonId, PokemonName } from "../../styles/styles";
import { transformCaptalize, trasnformPokemonId } from "../../utils/parser";
import { PokemonArtWork, PokemonArtWorkSmall } from "./PokemonArtWork";



export function EvolutionItem({ pokeData }: any) {

    let name = transformCaptalize(pokeData.name);
    let id = trasnformPokemonId(pokeData.id);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <PokeballSmallSvg style={{ position: 'absolute' }}></PokeballSmallSvg>
            <PokemonArtWork height={75} width={75} artworkUrl={pokeData.sprites.other['official-artwork'].front_default} />
            <PokemonId >{id}</PokemonId>
            <PokemonName style={{ color: '#000', fontSize: 16 }}>{name}</PokemonName>
        </View>
    );

}