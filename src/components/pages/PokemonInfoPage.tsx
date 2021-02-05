import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { View } from "react-native";
import { Defs, LinearGradient, Stop, Svg, Text } from 'react-native-svg';
import { DotsLargeSvg, PokeballBgTypeSvg, PokeballSmallSvg } from '../../assets/images';
import pokemonService from '../../service/pokemonService';
import { Loading, PokemonArtName } from '../../styles/styles';
import { getTypeInfoAndColorsByPokemonType } from '../../utils/functions';
import { trasnformPokemonId, transformPokemonTypes, trasnformPokemonName } from '../../utils/parser';
import { PokemonArtWork, PokemonArtWorkSmall } from '../itens/PokemonArtWork';
import { PokemonPersonalData, PokemonPersonalDataNoFlex } from '../itens/PokemonPersonalData';






export const PokemonInfoPage = ({ route }: any) => {

    const [pokemonData, setPokemonData] = useState<any>();

    useEffect(() => {
        console.log(route.params);
        pokemonService.getUrl(route.params?.item.url).then((res: any) => {

            res.data.id = trasnformPokemonId(res.data.id);
            res.data.types = transformPokemonTypes(res.data.types);
            res.data.name = trasnformPokemonName(res.data.name);
            setPokemonData(res.data);

        });

    }, [route.params?.item]);
    console.log("PokemonData", pokemonData);
    let bgColor = getTypeInfoAndColorsByPokemonType('').backgroundColor;


    if (pokemonData) {
        if (pokemonData && pokemonData?.types && pokemonData?.types.length > 0) {
            bgColor = getTypeInfoAndColorsByPokemonType(pokemonData.types[0]).backgroundColor;
        }
        return (
            <View style={[styles.mainContainer, { backgroundColor: bgColor }]}>

                <View style={[styles.conteiner1]}>

                    <Svg style={styles.nameStroke} height="120" width="800">
                        <Defs>
                            <LinearGradient id="text-fill-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                                <Stop offset="0%" stopColor="rgb(255,255,255)" stopOpacity="0.3" />
                                <Stop offset="100%" stopColor="rgb(255,255,255)" stopOpacity="0" />
                            </LinearGradient>
                        </Defs>
                        <Text
                            fill="none"
                            stroke="url(#text-fill-grad)"
                            strokeWidth="1.5"
                            fontSize="100"
                            fontWeight="bold"
                            x="180"
                            y="100"
                            textAnchor="middle"
                            letterSpacing='5'
                            fontFamily='SFProDisplay-Regular'

                        >
                            {pokemonData.name.toUpperCase()}
                        </Text>
                    </Svg>
                    <DotsLargeSvg style={styles.dots} />
                    <PokeballSmallSvg style={styles.pokeball} />
                    <PokemonArtWorkSmall artworkUrl={pokemonData.sprites.other['official-artwork'].front_default} />
                    <PokemonPersonalDataNoFlex id={pokemonData.id} types={pokemonData.types} name={pokemonData.name} />

                </View>
                <View style={[styles.conteiner2]}>
                </View>
            </View >
        );
    } else {
        return (
            <Loading size='large' color='#6F6E78' />
        );
    }

};


const styles = StyleSheet.create({
    nameStroke: {
        position: 'absolute',
        top: 0,
        left: 0,
        fontFamily: 'SFProDisplay-Regular',
        overflow: 'hidden',


    },

    dots: {
        position: 'absolute',
        top: 120,
        right: 0,
    },
    pokeball: {
        position: 'absolute',
        bottom: -50,
        left: 20,
    },
    mainContainer: {
        flex: 1,
    },
    conteiner1: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',


    },
    conteiner2: {
        flex: 1.7,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    }


});