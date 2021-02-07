import React from "react";
import { View } from "react-native";
import { PokebalEvolutionSvg, PokeballSmallSvg } from "../../assets/images";
import { PokemonId, PokemonName } from "../../styles/styles";
import { transformCaptalize, trasnformPokemonId } from "../../utils/parser";
import { PokemonArtWork, PokemonArtWorkSmall } from "./PokemonArtWork";



export function EvolutionPokemon({ pokeData }: any) {

    let name = transformCaptalize(pokeData.name);
    let id = trasnformPokemonId(pokeData.id);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <PokebalEvolutionSvg style={{ position: 'absolute' }}></PokebalEvolutionSvg>
            <View style={{ marginTop: 30 }}>
                <PokemonArtWorkSmall height={75} width={75} justifyContent={'center'} artworkUrl={pokeData.sprites.other['official-artwork'].front_default} />
                <PokemonId >{id}</PokemonId>
                <PokemonName style={{ color: '#000', fontSize: 16 }}>{name}</PokemonName>
            </View>
        </View>
    );

}