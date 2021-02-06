import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Title, Description } from "../../styles/styles";
import SearchInput from "./SearchInput";




export const Header = ({ haveBackground, position }: any) => {

    useEffect(() => {
    }, [haveBackground]);

    return (
        <View style={[styles.header,
        { backgroundColor: haveBackground ? 'rgba(255,255,255,0.8)' : 'transparent' }]}>
            <Title>Pokédex</Title>
            <Description>Search for Pokémon by name or using the National Pokédex number.</Description>
            <SearchInput />
        </View>
    );
};



const styles = StyleSheet.create({
    header: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        zIndex: 1000,
        elevation: 1000,
        borderRadius: 10,

    },

});
