



import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import pokemonService from "../../service/pokemonService";
import { Loading } from "../../styles/styles";
import { EvolutionItem } from "./EvolutionItem";
import { EvolutionLevelInfo } from "./EvolutionLevelRow";
import { PokemonArtWorkSmall } from "./PokemonArtWork";








export function EvolutioRow({ evolution }: any) {

    const [pokemon1, setPokemon1] = useState<any>();
    const [pokemon2, setPokemon2] = useState<any>();

    if (!pokemon1) {

        pokemonService.getPokemonByName(evolution.from.name).then((res: any) => {
            setPokemon1(res.data);
        });

    }

    if (!pokemon2) {

        pokemonService.getPokemonByName(evolution.to.name).then((res: any) => {
            setPokemon2(res.data);
        });

    }


    if (pokemon1 && pokemon2) {

        return (
            <View style={styles.view} >
                <EvolutionItem pokeData={pokemon1} />
                <EvolutionLevelInfo level={evolution.level} />
                <EvolutionItem pokeData={pokemon2} />
            </View>
        );
    } else {
        return (
            <Loading size='large' color='#6F6E78' />
        );
    }


}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        flex: 1,
        margin: 10,
        justifyContent: 'center'
    },

});



