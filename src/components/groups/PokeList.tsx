
import React, { Component } from "react";
import { FlatList, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Loading } from "../../styles/styles";
import PokeListItem from "../itens/PokeListItem";

export interface Props {
    data: any[];
    onScroll: Function;
    onScrollEnd: Function;
    style: any;
    onClickItem: Function;
}

export interface State {
    data: any[];

}


export default class PokeList extends Component<Props, State> {


    constructor(props: Props) {
        super(props);
    }




    renderItem = ({ item }: any) => {
        return (
            <TouchableOpacity onPress={() => this.props.onClickItem(item)}>
                <PokeListItem {...item} />
            </TouchableOpacity>
        );
    };



    render() {
        if (this.props.data && this.props.data.length > 0) {
            return (
                <FlatList
                    data={this.props.data}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.url}
                    onScroll={(evt) => { this.props.onScroll(evt); }}
                    onEndReached={(evt) => { this.props.onScrollEnd(evt); }}
                    onEndReachedThreshold={0.1}
                    style={this.props.style}
                    contentContainerStyle={{ paddingBottom: 160 }}
                />

            );
        } else {
            return (
                <Loading size='large' color='#6F6E78' />
            );
        }



    }
}



const styles = StyleSheet.create({


});