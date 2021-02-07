import { SagaActionsTypes } from "../../utils/enums";

export function sagaAddPokemonDataById(id: number | string) {
    return {
        type: SagaActionsTypes.ASYNC_SAVE_POKEMON_DATA,
        payload: id
    };
}