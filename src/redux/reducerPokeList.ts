import { StoreActionsTypes } from "../utils/enums";
import { MyStore, ActionRedux } from "../utils/iterfaces";

const STORE_INITIAL_STATE: MyStore = {
    pokemonsData: {},
    searchInputText: '',
};




export function reducerSavePokemonsList(state: MyStore = STORE_INITIAL_STATE, action: ActionRedux) {

    switch (action.type) {
        case StoreActionsTypes.SET_SEARCH_TEXT:
            return { ...state, searchInputText: action.value };
        case StoreActionsTypes.ADD_POKEMON_DATA:
            return { ...state, pokemonsData: { ...state.pokemonsData, [action.value.key]: action.value.data } };
        default:
            return state;
    }

}


