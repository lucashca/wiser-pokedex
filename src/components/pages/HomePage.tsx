

import React, { Component, constructor } from 'react';

import { Animated, Button, Dimensions, FlatList, ImageBackground, ListView, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native';


import Axios from 'axios';

import { PokeballBgImageSvg } from '../../assets/images';
import pokemonService from '../../service/pokemonService';
import { MainContainer } from '../../styles/styles';
import Menu from '../groups/Menu';
import PokeList from '../groups/PokeList';
import { Header } from '../groups/Header';






var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height



export interface Props {
    navigation: any;
}

export interface State {
    data: any[];
    next: string;
    onRequest: boolean;
    headerBackground: boolean;
    position: string;

}

class HomePage extends Component<Props, State> {
    scrollY: Animated.Value;
    translateY: any;
    pokemonsData: any;

    constructor(props: any) {
        super(props);
        this.state = {
            data: [],
            next: '',
            onRequest: false,
            headerBackground: false,
            position: 'relative',
        };
        this.scrollY = new Animated.Value(0);
        const difClamp = Animated.diffClamp(this.scrollY, 0, 300);
        this.translateY = difClamp.interpolate({
            inputRange: [0, 160],
            outputRange: [0, -160]
        });

    }

    componentDidMount() {
        this.getPokemons(20, 0);
    }

    getPokemons(limit: number, offset: number) {
        console.log("GetPokemons");
        pokemonService.getPokemons(limit, offset).then((res: any) => {
            this.setState({ data: res.data.results, next: res.data.next });
        }).catch((err) => {
        });
    }



    onScroll(yVal: number) {

        if (!this.state.headerBackground && yVal > 160) {
            this.setState({ headerBackground: true });
        }
        if (this.state.headerBackground == true && yVal < 50) {
            this.setState({ headerBackground: false });
        }

        this.scrollY.setValue(yVal);
    }

    onScrollEnd(evt: any) {
        if (!this.state.onRequest) {
            this.setState({ onRequest: true }, () => {
                pokemonService.getUrl(this.state.next).then((res: any) => {
                    this.setState({ data: [...this.state.data, ...res.data.results], next: res.data.next });
                }).finally(() => {
                    this.setState({ onRequest: false });
                });
            });
        }
    }

    onClickItem(item: any) {
        this.props.navigation.navigate('PokemonInfo', { item });
    };

    render() {
        return (
            <SafeAreaView style={styles.background}>
                <PokeballBgImageSvg style={styles.pokeballBg} />
                <MainContainer>
                    <Menu />
                    <Animated.View style={[styles.animatedView, { transform: [{ translateY: this.translateY }] }]}>
                        <Header haveBackground={this.state.headerBackground} />
                    </Animated.View>
                    <PokeList
                        style={styles.list}
                        data={this.state.data}
                        onScroll={(e: any) => { this.onScroll(e.nativeEvent.contentOffset.y); }}
                        onScrollEnd={(e: any) => { this.onScrollEnd(e); }}
                        onClickItem={(item: any) => { this.onClickItem(item); }}
                    />
                </MainContainer>
            </SafeAreaView>
        );
    }


}


const styles = StyleSheet.create({
    background: {
        backgroundColor: '#fff',
        flex: 1,
    },
    animatedView: {
        position: 'absolute',
        top: 80,
        left: 40,
        zIndex: 10,
        elevation: 10,
    },
    list: {
        marginTop: 20,
        paddingTop: 170,
        zIndex: 0,
    },
    pokeballBg: {
        flex: 1,
        resizeMode: 'cover',

    },

});

export default HomePage;
