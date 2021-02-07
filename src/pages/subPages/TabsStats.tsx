import React from "react";
import { View, TouchableOpacity } from "react-native";
import Animated from 'react-native-reanimated';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StatsScreen } from "./StatsScreen";


import { StyleSheet } from "react-native";
import { AboutScreen } from "./AboutScreen";
import EvolutionsScreen from "./EvolutionScreen";
import { PokeballSmallSvg } from "../../assets/images";






const Tab = createMaterialTopTabNavigator();


function MyTabBar({ state, descriptors, navigation, position }: any) {

    return (
        <View style={{ flexDirection: 'row' }}>


            {state.routes.map((route: any, index: any) => {
                const label = route.name;
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };



                const inputRange = state.routes.map((_: any, i: any) => i);

                const opacity = Animated.interpolate(position, {
                    inputRange,
                    outputRange: inputRange.map((i: any) => (i === index ? 1 : 0.5)),
                });



                const bottom = Animated.interpolate(position, {
                    inputRange,
                    outputRange: inputRange.map((i: any) => (i === index ? -50 : -100)),
                });

                return (

                    <TouchableOpacity
                        accessibilityRole="button"
                        onPress={onPress}
                        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                        key={'key-' + route.key}
                    >
                        <Animated.View style={[styles.pokeballView, { bottom }]}>
                            <PokeballSmallSvg style={styles.pokeball} />
                        </Animated.View>
                        <Animated.Text style={[styles.headerText, { opacity, fontWeight: isFocused ? '700' : '400' }]}>
                            {label}
                        </Animated.Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}




export function MyTabs({ pokemonData, mainColor }: any) {
    return (
        <Tab.Navigator sceneContainerStyle={{ backgroundColor: 'transparent' }} tabBar={props => <MyTabBar {...props} />}>
            <Tab.Screen name="About" children={() => <AboutScreen mainColor={mainColor} pokemonData={pokemonData} />} />
            <Tab.Screen name="Stats" children={() => <StatsScreen mainColor={mainColor} pokemonData={pokemonData} />} />
            <Tab.Screen name="Evolution" children={() => <EvolutionsScreen mainColor={mainColor} pokemonData={pokemonData} />} />
        </Tab.Navigator >
    );
}




const styles = StyleSheet.create({

    pokeballView: {
        position: 'absolute',

        height: 100,
        width: 100,
    },
    pokeball: {

    },
    headerText: {
        textAlign: 'center',
        padding: 10,
        paddingTop: 20,
        height: 50,
        color: '#fff',
    }
});