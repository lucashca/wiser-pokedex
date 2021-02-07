import React from "react";
import { StyleSheet, View } from "react-native";
import { PokemonType } from "../itens/PokemonTypeItem";


export interface Props {
    types: string[];
}



export const PokemonTypeList = (props: any) => {
    if (props.types) {
        if (props.types.length >= 2) {
            return (
                <View style={styles.typesBox}>
                    <PokemonType type={props.types[0]} />
                    <PokemonType type={props.types[1]} />
                </View>
            );
        } else {
            if (props.types.length == 1) {
                return (
                    <View style={styles.typesBox}>
                        <PokemonType type={props.types[0]} />
                    </View>
                );
            }
        }
    }
    return (<></>);
};



const styles = StyleSheet.create({

    typesBox: {
        flexDirection: "row",
    },
});
