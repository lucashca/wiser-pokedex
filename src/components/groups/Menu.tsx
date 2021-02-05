import React, { Component } from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";

import { MenuIconConfig, MenuIconDots, MenuIconFilter } from "../../assets/images";
const width = Dimensions.get('window').width; //full width

export default class Menu extends Component {

    onClickConfig() {
        console.log("onClickConfig");
    }

    onClickFilter() {
        console.log("onClickFilter");
    }

    onClickDots() {
        console.log("onClickDots");
    }

    render() {
        return (
            <View style={styles.menuBox}>
                <TouchableOpacity onPress={this.onClickConfig}>
                    <MenuIconConfig style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onClickFilter}>
                    <MenuIconFilter style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onClickDots}>
                    <MenuIconDots style={styles.icon} />
                </TouchableOpacity>
            </View>

        );
    }
}


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
