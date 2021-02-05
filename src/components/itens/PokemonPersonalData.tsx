import { NONE } from "apisauce";
import React from "react";
import { StyleSheet, View } from "react-native";
import { PokemonId, PokemonName } from "../../styles/styles";
import PokemonTypeList from "../groups/PokemonTypeList";




interface Props {
    id: string,
    name: string,
    types: string[],
}



export function PokemonPersonalData({ id, name, types }: Props) {

    return (
        <View style={styles.pokeInfoBox}>
            <PokemonId>{id}</PokemonId>
            <PokemonName>{name}</PokemonName>
            <PokemonTypeList types={types} />
        </View>
    );

}



export function PokemonPersonalDataNoFlex({ id, name, types }: Props) {

    return (
        <View style={[styles.pokeInfoBox, { flex: 0 }]}>
            <PokemonId>{id}</PokemonId>
            <PokemonName>{name}</PokemonName>
            <PokemonTypeList types={types} />
        </View>
    );

}



const styles = StyleSheet.create({

    pokeInfoBox: {
        flex: 1.01,
        flexDirection: "column",
        justifyContent: 'center',
        padding: 20,

    }
});