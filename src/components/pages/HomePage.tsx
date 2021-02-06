

import React, { Component } from 'react';

import { Animated, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import { PokeballBgImageSvg } from '../../assets/images';
import pokemonService from '../../service/pokemonService';
import { MainContainer } from '../../styles/styles';
import Menu from '../groups/Menu';
import PokeList from '../groups/PokeList';
import { Header } from '../groups/Header';


import { connect } from 'react-redux';
import { addPokeList } from '../../store/reducerPokeList';
import { addEvolutionData } from '../../store/reducersEvolutionData';


export interface State {
    next: string;
    onRequest: boolean;
    headerBackground: boolean;

}

class HomePage extends Component<any, State> {
    scrollY: Animated.Value;
    translateY: any;
    pokemonsData: any;

    constructor(props: any) {
        super(props);
        this.state = {
            next: '',
            onRequest: false,
            headerBackground: false,
        };
        this.scrollY = new Animated.Value(0);
        const difClamp = Animated.diffClamp(this.scrollY, 0, 300);
        this.translateY = difClamp.interpolate({
            inputRange: [0, 160],
            outputRange: [0, -160]
        });


    }

    componentDidMount() {
        this.getPokemons(5, 0);


    }

    getPokemons(limit: number, offset: number) {
        console.log("GetPokemons");
        pokemonService.getPokemons(limit, offset).then((res: any) => {
            this.props.dispatch(addPokeList(res.data.results));
            this.setState({ next: res.data.next });
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
                    this.props.dispatch(addPokeList(res.data.results));
                    this.setState({ next: res.data.next });
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
                        data={this.props.data}
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


const mapStateToProps = (state: any) => {
    return { data: state.pokemonsList.pokemonsList };
};



export default connect(mapStateToProps)(HomePage);

