



import React from "react";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import pokemonService from "../../service/pokemonService";
import { Loading } from "../../styles/styles";
import { EvolutionLevelInfo } from "../unit/EvolutionLevelInfo";
import { EvolutionPokemon } from '../unit/EvolutionPokemon';

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
                <EvolutionPokemon pokeData={pokemon1} />
                <EvolutionLevelInfo level={evolution.level} />
                <EvolutionPokemon pokeData={pokemon2} />
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
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'center',

    },

});



