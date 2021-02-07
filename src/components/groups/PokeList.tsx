
import React from "react";
import { Animated } from "react-native";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import PokeListItem from "../itens/PokeListItem";
import { useFindNewPokemons } from "../../hooks/findPokemons";
import { POKEMON_ITEM_HEIGHT } from "../../../global";

interface Props {

    onScroll: Function;

    style: any;
    onClickItem: Function;

    animatedValue: any;
}

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);



export const PokeList = (props: Props) => {


    const [pokemons, fetchMore] = useFindNewPokemons();

    const getItemLayout = (data: any, index: any) => {

        return { length: POKEMON_ITEM_HEIGHT, offset: POKEMON_ITEM_HEIGHT * index, index };
    };
    const renderItem = ({ item }: any) => {
        return (
            <TouchableOpacity onPress={() => props.onClickItem(item)}>
                <PokeListItem {...item} />
            </TouchableOpacity>
        );
    };





    return (
        <AnimatedFlatList
            key={'Flat-key'}
            data={pokemons}
            renderItem={renderItem}
            initialNumToRender={10}
            scrollEventThrottle={16}
            keyExtractor={(item: any) => item.url}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: props.animatedValue } } }],
                { useNativeDriver: true, listener: (event: any) => { props.onScroll(event.nativeEvent.contentOffset.y); } })}
            onEndReached={fetchMore}
            onEndReachedThreshold={0.9}
            style={props.style}
            getItemLayout={getItemLayout}
            contentContainerStyle={{ paddingBottom: 250 }
            }
        />
    );


};

