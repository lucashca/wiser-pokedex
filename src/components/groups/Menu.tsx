import React, { Component } from "react";
import { Dimensions, StyleSheet, ToastAndroid, TouchableOpacity, View } from "react-native";

import { MenuIconConfig, MenuIconDots, MenuIconFilter } from "../../assets/images";
const width = Dimensions.get('window').width; //full width

export const Menu = () => {

    const onClickConfig = () => {
        showToastWithGravity('Show Generation Modal');
    };

    const onClickFilter = () => {
        showToastWithGravity('Show Sort Modal');
    };

    const onClickDots = () => {
        showToastWithGravity('Show Filter Modal');
    };

    const showToastWithGravity = (text: string) => {
        ToastAndroid.showWithGravity(
            text,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
    };



    return (
        <View style={styles.menuBox}>
            <TouchableOpacity onPress={onClickConfig}>
                <MenuIconConfig style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onClickFilter}>
                <MenuIconFilter style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onClickDots}>
                <MenuIconDots style={styles.icon} />
            </TouchableOpacity>
        </View>

    );

};


const styles = StyleSheet.create({

    menuBox: {
        width: width - 80,
        flexDirection: 'row-reverse',
        alignSelf: 'stretch',
        elevation: 100,
        zIndex: 10,
    },
    icon: {
        marginRight: 20,
    },

});
