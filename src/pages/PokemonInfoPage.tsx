import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { View } from "react-native";
import { ArrowLeftSvg, DotsLargeSvg } from '../assets/images';
import { PokemonArtWorkSmall } from '../components/unit/PokemonArtWork';
import { PokemonPersonalDataNoFlex } from '../components/unit/PokemonPersonalData';
import { TextStroke } from '../components/unit/TextStroke';
import pokemonService from '../service/pokemonService';
import { getTypeInfoAndColorsByPokemonType } from '../styles/colors';
import { Loading } from '../styles/styles';
import { trasnformPokemonId, transformPokemonTypes, transformCaptalize } from '../utils/parser';
import { MyTabs } from './subPages/TabsStats';
import { BackHandler } from 'react-native';

export const PokemonInfoPage: any = ({ route, navigation }: any) => {

    const [pokemonData, setPokemonData] = useState<any>();

    useEffect(() => {
        pokemonService.getUrl(route.params?.item.url).then((res: any) => {
            res.data.idApp = trasnformPokemonId(res.data.id);
            res.data.types = transformPokemonTypes(res.data.types);
            res.data.name = transformCaptalize(res.data.name);
            setPokemonData(res.data);
        });

    }, []);

    const onPressBackButton = () => {
        navigation.navigate('Home');
        return true;
    };


    BackHandler.addEventListener('hardwareBackPress', onPressBackButton);




    if (pokemonData) {
        if (pokemonData?.types && pokemonData?.types.length > 0) {
            let { backgroundColor, typeColor } = getTypeInfoAndColorsByPokemonType(pokemonData.types[0]);
            return (
                <View style={[styles.mainContainer, { backgroundColor: backgroundColor }]}>
                    <View style={styles.backButtonBox}>
                        <TouchableOpacity style={styles.backButton} onPress={onPressBackButton}><ArrowLeftSvg /></TouchableOpacity>
                    </View>
                    <TextStroke style={styles.nameStroke} text={pokemonData.name.toUpperCase()} />
                    <View style={[styles.conteiner1]}>
                        <DotsLargeSvg style={styles.dots} />
                        <PokemonArtWorkSmall artworkUrl={pokemonData.sprites.other['official-artwork'].front_default} />
                        <PokemonPersonalDataNoFlex id={pokemonData.idApp} types={pokemonData.types} name={pokemonData.name} />
                    </View>
                    <View style={[styles.conteiner2]}>
                        <MyTabs pokemonData={pokemonData} mainColor={typeColor} />
                    </View>
                </View >
            );
        }
    }
    return (<Loading size='large' color='#6F6E78' />);
};


const styles = StyleSheet.create({
    backButtonBox: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 1000,
    },
    backButton: {
        padding: 10,
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

    mainContainer: {
        flex: 1,
    },
    conteiner1: {
        marginTop: 40,
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