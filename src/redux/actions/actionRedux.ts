import { StoreActionsTypes } from "../../utils/enums";


export const storeActionsAddPokemonData = (value: any) => ({
    type: StoreActionsTypes.ADD_POKEMON_DATA,
    value: { key: value.name.toLowerCase().trim(), data: value }
});


export const storeActionsSetSearchText = (value: any) => ({
    type: StoreActionsTypes.SET_SEARCH_TEXT,
    value
});

export const storeActionsCleanSearchText = () => ({
    type: StoreActionsTypes.SET_SEARCH_TEXT,
    value: ''
});
