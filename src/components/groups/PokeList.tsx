
import React from "react";
import { Animated } from "react-native";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLOR_TEXT_GRAY } from "../../styles/colors";
import { Loading } from "../../styles/styles";
import { PokemonItemList } from "../../utils/iterfaces";
import PokeListItem from "../itens/PokeListItem";

interface Props {
    data: any[];
    onScroll: Function;
    onScrollEnd: Function;
    style: any;
    onClickItem: Function;
    setFlatListRef: Function;
}

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);


const ITEM_HEIGHT = 160;

export const PokeList = (props: Props) => {

    const renderItem = ({ item }: any) => {
        return (
            <TouchableOpacity onPress={() => props.onClickItem(item)}>
                <PokeListItem {...item} />
            </TouchableOpacity>
        );
    };


    const getItemLayout = (data: any, index: any) => {

        return { length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index };
    };


    if (props.data && props.data.length > 0) {
        return (
            <AnimatedFlatList
                key={'Flat-key'}
                data={props.data}
                renderItem={renderItem}
                initialNumToRender={10}
                scrollEventThrottle={16}
                keyExtractor={(item: any) => item.url}
                onScroll={(evt) => { props.onScroll(evt); }}
                onEndReached={(evt) => { props.onScrollEnd(evt); }}
                onEndReachedThreshold={1}
                ref={(ref: any) => { props.setFlatListRef(ref); }}
                style={props.style}
                getItemLayout={getItemLayout}
                contentContainerStyle={{ paddingBottom: 250 }
                }
            />

        );
    } else {
        return (
            <Loading size='large' color={COLOR_TEXT_GRAY} />
        );
    }

};

