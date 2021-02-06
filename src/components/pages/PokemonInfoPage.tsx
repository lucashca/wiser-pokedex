import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { View } from "react-native";
import { DotsLargeSvg, PokeballSmallSvg } from '../../assets/images';
import pokemonService from '../../service/pokemonService';
import { Loading } from '../../styles/styles';
import { getTypeInfoAndColorsByPokemonType } from '../../utils/functions';
import { trasnformPokemonId, transformPokemonTypes, transformCaptalize } from '../../utils/parser';
import { PokemonArtWorkSmall } from '../itens/PokemonArtWork';
import { PokemonPersonalDataNoFlex } from '../itens/PokemonPersonalData';
import { TextStroke } from '../itens/TextStroke';
import { TabView, SceneMap } from 'react-native-tab-view';
import { MyTabs } from './TabsStats';





export const PokemonInfoPage = ({ route }: any) => {

    const [pokemonData, setPokemonData] = useState<any>();

    useEffect(() => {
        pokemonService.getUrl(route.params?.item.url).then((res: any) => {

            res.data.idApp = trasnformPokemonId(res.data.id);
            res.data.types = transformPokemonTypes(res.data.types);
            res.data.name = transformCaptalize(res.data.name);
            setPokemonData(res.data);

        });

    }, [route.params?.item]);



    if (pokemonData) {
        if (pokemonData?.types && pokemonData?.types.length > 0) {
            let { backgroundColor, typeColor } = getTypeInfoAndColorsByPokemonType(pokemonData.types[0]);
            return (
                <View style={[styles.mainContainer, { backgroundColor: backgroundColor }]}>

                    <View style={[styles.conteiner1]}>
                        <TextStroke style={styles.nameStroke} text={pokemonData.name.toUpperCase()} />
                        <DotsLargeSvg style={styles.dots} />
                        <PokeballSmallSvg style={styles.pokeball} />
                        <PokemonArtWorkSmall artworkUrl={pokemonData.sprites.other['official-artwork'].front_default} />
                        <PokemonPersonalDataNoFlex id={pokemonData.idApp} types={pokemonData.types} name={pokemonData.name} />

                    </View>
                    <View style={[styles.conteiner2]}>
                        <MyTabs pokemonData={pokemonData} mainColor={typeColor} />
                    </View>
                </View >
            );
        }
    } else {
        return (
            <Loading size='large' color='#6F6E78' />
        );
    }

};


const styles = StyleSheet.create({
    scene: {
        flex: 1
    },
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
        bottom: -90,
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
        flex: 3,

        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    }


});