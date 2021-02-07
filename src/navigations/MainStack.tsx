import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { PokemonInfoPage } from '../pages/PokemonInfoPage';
import HomePage from '../pages/HomePage';


const Stack = createStackNavigator();

export function MainStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="PokemonInfo" component={PokemonInfoPage} />
        </Stack.Navigator>
    );
}