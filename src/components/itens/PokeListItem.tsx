import React, { Component, PureComponent } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import { DotsSvg, PokeballBgTypeSvg } from "../../assets/images";
import pokemonService from "../../service/pokemonService";
import { Loading, PokemonId, PokemonName } from "../../styles/styles";
import { getTypeInfoAndColorsByPokemonType } from "../../utils/functions";
import { transformPokemonTypes, trasnformPokemonId, transformCaptalize } from "../../utils/parser";
import PokemonTypeList from "../groups/PokemonTypeList";
import { PokemonArtWork } from "./PokemonArtWork";
import { PokemonPersonalData } from "./PokemonPersonalData";


export interface State {
    id: string;
    name: string;
    type: string[];
    artworkUrl: string;
}



export interface Props {
    name: string;
    url: string;
}


export default class PokeListItem extends PureComponent<Props, State> {


    constructor(props: Props, state: State) {
        super(props);
        this.state = state;

        this.getPokemonData();
    }

    getPokemonData() {
        pokemonService.getUrl(this.props.url).then((res: any) => {
            let id = trasnformPokemonId(res.data.id);
            let type = transformPokemonTypes(res.data.types);
            let name = transformCaptalize(this.props.name);

            this.setState({
                id,
                type,
                name,
                artworkUrl:
                    res.data.sprites.other['official-artwork'].front_default
            }, () => {

            });
        });
    }

    render() {
        let bgColor = getTypeInfoAndColorsByPokemonType('').backgroundColor;


        if (this.state.id) {
            bgColor = getTypeInfoAndColorsByPokemonType(this.state.type[0]).backgroundColor;
            return (
                <View style={styles.mainContainer}>
                    <View style={[styles.item, { backgroundColor: bgColor }]}>
                        <DotsSvg style={styles.dots} />
                        <PokeballBgTypeSvg style={styles.pokeball} />
                        <PokemonPersonalData id={this.state.id} types={this.state.type} name={this.state.name} />
                        <PokemonArtWork artworkUrl={this.state.artworkUrl} />
                    </View>
                </View>
            );
        } else {
            return (
                <View style={styles.mainContainer}>
                    <View style={[styles.item, { backgroundColor: bgColor }]}>
                        <DotsSvg style={styles.dots} />
                        <PokeballBgTypeSvg style={styles.pokeball} />
                        <Loading size='large' color='#6F6E78' />
                    </View>
                </View>
            );
        }
    }

}


const styles = StyleSheet.create({
    dots: {
        position: "absolute",
        left: 90,
        top: 5,
    },
    pokeball: {
        position: 'absolute',
        right: 0,
    },
    mainContainer: {
        height: 150,
        paddingTop: 20,
    },

    item: {
        flexDirection: 'row',
        height: 115,
        borderRadius: 10,
    }

});