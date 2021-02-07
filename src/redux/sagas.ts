


import { all, call, put, takeEvery } from 'redux-saga/effects';
import pokemonService from '../service/pokemonService';
import { asyncStoragePokemonData } from '../storage/persistanteStorage';
import { SagaActionsTypes } from '../utils/enums';
import { ActionSaga } from '../utils/iterfaces';
import { trasnformPokemonData } from '../utils/parser';
import { storeActionsAddPokemonData } from './actions/actionRedux';




function* asyncSavePokemonData(action: ActionSaga) {

    const response = yield call(pokemonService.getPokemonById, action.payload);

    let pokemonData = trasnformPokemonData(response.data);

    asyncStoragePokemonData(pokemonData);

    yield put(storeActionsAddPokemonData(pokemonData));
}


export default function* root() {
    yield all([
        takeEvery(SagaActionsTypes.ASYNC_SAVE_POKEMON_DATA, asyncSavePokemonData)
    ]);
}