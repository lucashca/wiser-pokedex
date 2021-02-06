import { ActionRedux } from "../utils/iterfaces";
import { combineReducers } from 'redux';
import { EvolutionDataStoreActions } from "../utils/enums";



const STORE_INITIAL_STATE = {
    evolutionData: []
};
export const addEvolutionData = (value: any) => ({
    type: EvolutionDataStoreActions.ADD,
    value
});

export const cleanEvolutionData = () => ({
    type: EvolutionDataStoreActions.CLEAN,
});



export function reducerEvolutionData(state: any = STORE_INITIAL_STATE, action: ActionRedux) {


    switch (action.type) {
        case EvolutionDataStoreActions.ADD:
            console.log('add', action, state);
            console.log({ ...state, evolutionData: [...state.evolutionData, ...action.value] });
            return { ...state, evolutionData: [...state.evolutionData, ...action.value] };
        case EvolutionDataStoreActions.CLEAN:
            return { ...state, evolutionData: [] };
        default:
            return state;
    }
}

