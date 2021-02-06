import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { ArrowSvg } from "../../assets/images";
import { LevelText } from "../../styles/styles";




export const EvolutionLevelInfo = ({ level }: any) => (

    <View style={styles.view}>
        <ArrowSvg style={styles.arrow} />
        <LevelText>
            (Level {level})
        </LevelText>
    </View>

);



const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',

        alignItems: 'center'
    },
    arrow: {

    }

});



