



import AsyncStorage from '@react-native-community/async-storage';


const APP_KEY = '@POKEDEX_STORAGE:';
const POKEMON_DATA_KEY = 'POKEMONDATA:';


const parseKeyPokemonData = (key: string) => {
    return APP_KEY + POKEMON_DATA_KEY + key;
};

export const storePokemonData = (key: string, value: any) => {
    let myKey = parseKeyPokemonData(key);
    return AsyncStorage.setItem(myKey, JSON.stringify(value));
};


export const retrievePokemonData = (key: any) => {
    let myKey = parseKeyPokemonData(key);
    return AsyncStorage.getItem(myKey);
};