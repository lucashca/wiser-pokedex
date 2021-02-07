

import React, { Component } from 'react';
import { Animated, FlatList, SafeAreaView, StyleSheet, ToastAndroid, TouchableOpacity, View } from 'react-native';

import { connect } from 'react-redux';
import { PokeballBgImageSvg } from '../assets/images';
import { Header } from '../components/groups/Header';
import { Menu } from '../components/groups/Menu';
import { PokeList } from '../components/groups/PokeList';
import PokeListItem from '../components/itens/PokeListItem';
import { storeActionsCleanSearchText } from '../redux/actions/actionRedux';

import pokemonService from '../service/pokemonService';
import { PokemonDescriptionText, MainContainer } from '../styles/styles';
import { MyStore } from '../utils/iterfaces';

export interface State {
    onRequest: boolean;
    headerBackground: boolean;
    animatedValue: any;
    pokemonByName: any;
}

const LIMIT_QUERY = 20;
class HomePage extends Component<any, State> {
    translateY: any;
    constructor(props: any) {
        super(props);
        this.state = { onRequest: false, headerBackground: false, animatedValue: new Animated.Value(0), pokemonByName: null };
        const difClamp = Animated.diffClamp(this.state.animatedValue, 0, 250);
        this.translateY = difClamp.interpolate({
            inputRange: [0, 300],
            outputRange: [0, -300],
            extrapolate: 'clamp',
        });
    }

    componentDidMount() {

    }

    componentDidUpdate() {

        if (this.props.searchInputText != '') {
            pokemonService.getPokemonByName(this.props.searchInputText.toLowerCase().trim()).then((res: any) => {
                if (res?.status == 404) {
                    this.showToastWithGravity('No Pokémon found!');
                } else {
                    let val = { name: res.data.name, url: res.config.baseURL + res.config.url };

                    this.setState({ pokemonByName: val });
                }
                this.props.dispatch(storeActionsCleanSearchText());
            });
        }
    }


    showToastWithGravity = (text: string) => {
        ToastAndroid.showWithGravity(text, ToastAndroid.SHORT, ToastAndroid.CENTER);
    };


    getPokemons = () => {
        this.setState({ pokemonByName: null });
    };


    onScroll = (yVal: number) => {
        if (!this.state.headerBackground && yVal > 160) {
            this.setState({ headerBackground: true });
        }
        if (this.state.headerBackground == true && yVal < 50) {
            this.setState({ headerBackground: false });
        }
    };



    onClickItem = (item: any) => {
        this.props.navigation.navigate('PokemonInfo', { item });
    };

    getBtnComponent = () => {
        if (this.state.pokemonByName) {
            return (
                <TouchableOpacity style={styles.btnAllPoke} onPress={this.getPokemons}>
                    <PokemonDescriptionText>See all Pokémons...</PokemonDescriptionText>
                </TouchableOpacity>
            );
        } else {
            return null;
        }
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
                    {!this.state.pokemonByName &&
                        <PokeList
                            animatedValue={this.state.animatedValue}
                            onClickItem={this.onClickItem}
                            onScroll={this.onScroll}
                            style={styles.list}
                        />
                    }
                    {this.state.pokemonByName &&
                        <View style={styles.pokemonItemView}>
                            <TouchableOpacity style={styles.pokemonItem} onPress={() => this.onClickItem(this.state.pokemonByName)}>
                                <PokeListItem {...this.state.pokemonByName} />
                            </TouchableOpacity>
                        </View>

                    }
                    {this.getBtnComponent()}
                </MainContainer>
            </SafeAreaView>
        );
    }


}


const styles = StyleSheet.create({
    pokemonItem: {

        marginTop: 20,
        paddingTop: 170,
    },
    pokemonItemView: {
        flex: 1,

    },
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
    btnAllPoke: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    }

});


const mapStateToProps = (state: MyStore) => {
    return { searchInputText: state.searchInputText };
};



export default connect(mapStateToProps)(HomePage);

