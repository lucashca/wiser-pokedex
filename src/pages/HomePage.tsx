

import React, { Component } from 'react';
import { Animated, FlatList, SafeAreaView, StyleSheet, ToastAndroid, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { PokeballBgImageSvg } from '../assets/images';
import { Header } from '../components/groups/Header';
import { Menu } from '../components/groups/Menu';
import { PokeList } from '../components/groups/PokeList';
import PokeListItem from '../components/itens/PokeListItem';
import { storeActionsCleanSearchText, storeActionsCleanPokeList, storeActionsAddPokeList } from '../redux/actions/action';
import pokemonService from '../service/pokemonService';
import { PokemonDescriptionText, MainContainer } from '../styles/styles';
import { MyStore } from '../utils/iterfaces';

export interface State {
    onRequest: boolean;
    headerBackground: boolean;
    animatedValue: any;
}

const LIMIT_QUERY = 20;

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);


const ITEM_HEIGHT = 160;

class HomePage extends Component<any, State> {
    scrollY: Animated.Value;
    translateY: any;
    pokemonsData: any;
    flatListRef: any;
    constructor(props: any) {
        super(props);
        this.state = {
            onRequest: false,
            headerBackground: false,
            animatedValue: new Animated.Value(0),
        };
        this.scrollY = new Animated.Value(0);
        const difClamp = Animated.diffClamp(this.state.animatedValue, 0, 250);
        this.translateY = difClamp.interpolate({
            inputRange: [0, 300],
            outputRange: [0, -300],
            extrapolate: 'clamp',
        });

    }

    componentDidMount() {
        this.getPokemonsInit();
    }


    showToastWithGravity = (text: string) => {
        ToastAndroid.showWithGravity(
            text,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
    };

    componentDidUpdate(prevProps: any) {
        if (this.props.searchInputText != '') {
            let s =
                pokemonService.getPokemonByName(this.props.searchInputText.toLowerCase().trim()).then((res: any) => {
                    if (res?.status == 404) {
                        this.showToastWithGravity('No Pokémon found!');
                    } else {
                        this.props.dispatch(storeActionsCleanSearchText());
                        let val = { name: res.data.name, url: res.config.baseURL + res.config.url };
                        this.props.dispatch(storeActionsCleanPokeList());
                        this.props.dispatch(storeActionsAddPokeList({ data: [val], next: '', backUrl: '' }));

                    }

                    this.props.dispatch(storeActionsCleanSearchText());
                });
        }
    }

    getPokemonsInit = () => {
        if (this.props.data && this.props.data.length === 0) {
            this.getPokemons();
        }
    };

    getPokemons = () => {
        this.props.dispatch(storeActionsCleanPokeList());
        pokemonService.getPokemons(LIMIT_QUERY, 0).then((res: any) => {
            this.props.dispatch(storeActionsAddPokeList({ data: res.data.results, next: res.data.next, backUrl: '' }));
        }).catch((err) => {
        });

    };


    onScroll(yVal: number) {

        console.log(yVal);
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
                if (this.props.next) {
                    pokemonService.getUrl(this.props.next).then((res: any) => {
                        this.props.dispatch(storeActionsAddPokeList({ data: res.data.results, next: res.data.next, backUrl: pokemonService.getBackUrlByNext(this.props.next, LIMIT_QUERY) }));
                        //              this.flatListRef.scrollToOffset({ animated: true, offset: 10 });
                    }).finally(() => {
                        this.setState({ onRequest: false });
                    });
                } else {
                    this.setState({ onRequest: false });
                }
            });
        }
    }

    onClickItem(item: any) {
        this.props.navigation.navigate('PokemonInfo', { item });
    };

    getBtnComponent = () => {
        if (this.props.data && this.props.data.length == 1) {
            return (
                <TouchableOpacity style={styles.btnAllPoke} onPress={this.getPokemons}>
                    <PokemonDescriptionText>See all Pokémons...</PokemonDescriptionText>
                </TouchableOpacity>
            );
        } else {
            return null;
        }
    };


    setFlatListRef = (ref: any) => {
        this.flatListRef = ref;
    };

    renderItem = ({ item }: any) => {
        return (
            <TouchableOpacity onPress={() => this.onClickItem(item)}>
                <PokeListItem {...item} />
            </TouchableOpacity>
        );
    };


    getItemLayout = (data: any, index: any) => {

        return { length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index };
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
                    <AnimatedFlatList
                        key={'Flat-key'}
                        data={this.props.data}
                        renderItem={this.renderItem}
                        initialNumToRender={10}
                        scrollEventThrottle={16}
                        keyExtractor={(item: any) => item.url}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { y: this.state.animatedValue } } }],
                            { useNativeDriver: true, listener: (event: any) => { this.onScroll(event.nativeEvent.contentOffset.y); } })}

                        onEndReached={(evt) => { this.onScrollEnd(evt); }}
                        onEndReachedThreshold={1}
                        ref={(ref: any) => { this.setFlatListRef(ref); }}
                        style={styles.list}
                        getItemLayout={this.getItemLayout}
                        contentContainerStyle={{ paddingBottom: 250 }
                        }
                    />

                    {this.getBtnComponent()}

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
    btnAllPoke: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    }

});


const mapStateToProps = (state: MyStore) => {
    return { data: state.pokemonsList, searchInputText: state.searchInputText, next: state.nextUrl, backUrl: state.backUrl };
};



export default connect(mapStateToProps)(HomePage);

