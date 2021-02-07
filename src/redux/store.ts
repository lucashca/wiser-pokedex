import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { MyStore } from "../utils/iterfaces";
import { reducerSavePokemonsList } from "./reducerPokeList";
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();


const store = createStore(reducerSavePokemonsList, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);



export default store;