import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { PokemonTypesEnum } from "../../utils/enums";
import { PokemonType } from "../itens/PokemonTypeItem";


export interface Props {
    types: string[];
}


export default class PokemonTypeList extends Component<Props> {

    constructor(props: Props) {
        super(props);
    }


    render() {
        if (this.props.types) {
            if (this.props.types.length >= 2) {
                return (
                    <View style={styles.typesBox}>
                        <PokemonType type={this.props.types[0]} />
                        <PokemonType type={this.props.types[1]} />
                    </View>
                );
            } else {
                if (this.props.types.length == 1) {
                    return (
                        <View style={styles.typesBox}>
                            <PokemonType type={this.props.types[0]} />
                        </View>
                    );
                }
            }
        }
        return (
            <>
            </>
        );
    }

};


const styles = StyleSheet.create({

    typesBox: {
        flexDirection: "row",
    },



});
