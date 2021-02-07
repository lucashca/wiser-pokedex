import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { SearchIcon } from "../../assets/images";
import { storeActionsSetSearchText } from "../../redux/actions/actionRedux";

import { MyStore } from "../../utils/iterfaces";





const SearchInput = ({ dispatch, searchInputText }: any) => {
    let showLoading = false;
    if (searchInputText) {
        showLoading = true;
    }

    let iconComponent = (<SearchIcon style={styles.iconSearch} />);
    if (showLoading) {
        iconComponent = (<ActivityIndicator style={styles.loading} size={'small'} color="#005599"></ActivityIndicator>);
    }



    return (
        <View style={styles.searchSection}>
            {iconComponent}
            <TextInput style={styles.textInput} placeholder="What Pokémon are you looking for?" onEndEditing={(event) => { dispatch(storeActionsSetSearchText(event.nativeEvent.text)); }} />

        </View>
    );
};


const mapStateToProps = (state: MyStore) => {
    return { searchInputText: state.searchInputText };
};





export default connect(mapStateToProps)(SearchInput);



const styles = StyleSheet.create({
    textInput: {
        flex: 1,
        height: 60,
        padding: 10,
    },
    loading: {
        marginLeft: 15,

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


