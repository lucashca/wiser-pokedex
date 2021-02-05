import React from "react";
import { StyleSheet, View } from "react-native";

import { PokemonTypeText } from "../../styles/styles";
import { PokemonTypesEnum } from "../../utils/enums";
import { getTypeInfoAndColorsByPokemonType } from "../../utils/functions";


export function PokemonType({ type }: any) {
    let data = getTypeInfoAndColorsByPokemonType(type);
    let Icon = data.icon;
    return (
        <View style={[styles.typeBox, { backgroundColor: data.typeColor }]}>
            <Icon style={styles.icon} />
            <PokemonTypeText>{data.name}</PokemonTypeText>
        </View>
    );
}


const styles = StyleSheet.create({
    typeBox: {
        padding: 3,
        flexDirection: "row",
        marginRight: 5,
        borderRadius: 3,


    },
    icon: {
        marginRight: 4
    }
});
