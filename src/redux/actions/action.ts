import { StoreActionsTypes } from "../../utils/enums";

export const storeActionsAddPokeList = (value: any) => ({
    type: StoreActionsTypes.ADD_POKELIST,
    value
});

export const storeActionsCleanPokeList = () => ({
    type: StoreActionsTypes.CLEAN_POKELIST,
});


export const storeActionsSetSearchText = (value: any) => ({
    type: StoreActionsTypes.SET_SEARCH_TEXT,
    value
});

export const storeActionsCleanSearchText = () => ({
    type: StoreActionsTypes.SET_SEARCH_TEXT,
    value: ''
});
