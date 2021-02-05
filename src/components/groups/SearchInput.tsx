import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SearchIcon } from "../../assets/images";


export default class SearchInput extends Component {


    render() {
        return (
            <View style={styles.searchSection}>
                <SearchIcon style={styles.iconSearch} />
                <TextInput style={styles.textInput} placeholder="What Pokémon are you looking for?" />
            </View>
        );
    }

}




const styles = StyleSheet.create({
    textInput: {
        flex: 1,
        height: 60,
        padding: 10,
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#F2F2F2',
        height: 60,
        marginTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },
    iconSearch: {
        marginLeft: 15,

    },

});


