import React from "react";
import { View, TouchableOpacity } from "react-native";
import Animated from 'react-native-reanimated';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StatsScreen } from "../groups/StatsScreen";
import { AboutScreen } from "../groups/AboutScreen";
import EvolutionsScreen from "../groups/EvolutionScreen";






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

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                const inputRange = state.routes.map((_: any, i: any) => i);
                const opacity = Animated.interpolate(position, {
                    inputRange,
                    outputRange: inputRange.map((i: any) => (i === index ? 1 : 0.5)),
                });

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1 }}
                        key={'key-' + route.key}
                    >
                        <Animated.Text style={{ textAlign: 'center', padding: 10, color: '#fff', opacity, fontWeight: isFocused ? '700' : '400' }}>
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
