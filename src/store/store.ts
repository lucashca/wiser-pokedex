import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { reducerSavePokemonsList } from './reducerPokeList';
import { reducerEvolutionData } from './reducersEvolutionData';



const STORE_INITIAL_STATE = {
    pokemonList: [],
    evolutionData: []
};

const reducers = combineReducers({ evolutionData: reducerEvolutionData, pokemonsList: reducerSavePokemonsList });

const store = createStore(reducers);

store.subscribe(() => {
    console.log('State change', store.getState());
});
export default store;