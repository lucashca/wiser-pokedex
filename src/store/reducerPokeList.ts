import { PokeListStoreActions } from "../utils/enums";
import { ActionRedux } from "../utils/iterfaces";

const STORE_INITIAL_STATE = {
    pokemonsList: [],
};

export const addPokeList = (value: any) => ({
    type: PokeListStoreActions.ADD,
    value
});

export const cleanPokeList = () => ({
    type: PokeListStoreActions.CLEAN,
});



export function reducerSavePokemonsList(state: any = STORE_INITIAL_STATE, action: ActionRedux) {

    switch (action.type) {
        case PokeListStoreActions.ADD:
            return { ...state, pokemonsList: [...state.pokemonsList, ...action.value] };
        case PokeListStoreActions.CLEAN:
            return { ...state, pokemonsList: [] };
        default:
            return state;
    }

}


