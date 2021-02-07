import { createStore } from 'redux';
import { reducerSavePokemonsList } from '../reducers/reducerPokeList';




const store = createStore(reducerSavePokemonsList);

export default store;