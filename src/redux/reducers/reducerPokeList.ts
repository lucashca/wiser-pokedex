import { StoreActionsTypes } from "../../utils/enums";
import { ActionRedux, MyStore } from "../../utils/iterfaces";

const STORE_INITIAL_STATE: MyStore = {
    pokemonsList: [],
    nextUrl: '',
    searchInputText: '',
    backUrl: '',
};




export function reducerSavePokemonsList(state: MyStore = STORE_INITIAL_STATE, action: ActionRedux) {
    switch (action.type) {
        case StoreActionsTypes.ADD_POKELIST:
            return { ...state, pokemonsList: [...state.pokemonsList, ...action.value.data], nextUrl: action.value.next, backUrl: action.value.backUrl };
        case StoreActionsTypes.CLEAN_POKELIST:
            return { ...state, pokemonsList: [], nextUrl: '' };
        case StoreActionsTypes.SET_SEARCH_TEXT:
            return { ...state, searchInputText: action.value };

        default:
            return state;
    }

}


