



import AsyncStorage from '@react-native-community/async-storage';
import { APP_KEY, POKEMON_DATA_KEY } from '../../global';




const parseKeyPokemonData = (key: string) => {
    return APP_KEY + POKEMON_DATA_KEY + key.toLowerCase().trim();
};

export const asyncStoragePokemonData = (value: any) => {
    let myKey = parseKeyPokemonData(value.name);
    return AsyncStorage.setItem(myKey, JSON.stringify(value));
};


export const retrievePokemonData = (key: any) => {
    let myKey = parseKeyPokemonData(key);
    return AsyncStorage.getItem(myKey);
};