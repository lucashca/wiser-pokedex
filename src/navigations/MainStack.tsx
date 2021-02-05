import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../components/pages/HomePage';
import { PokemonInfoPage } from '../components/pages/PokemonInfoPage';


const Stack = createStackNavigator();

export function MainStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="PokemonInfo" component={PokemonInfoPage} />

        </Stack.Navigator>
    );
}