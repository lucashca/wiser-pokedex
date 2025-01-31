
export interface TypeInfoColor {
    name: string;
    backgroundColor: string;
    typeColor: string;
    icon: any;

}

export interface PokemonItemList {
    name: string,
    url: string,
}

export interface MyStore {
    pokemonsData: any,
    searchInputText: string,
}
export interface ActionRedux {
    type: string,
    value: any;
}

export interface ActionSaga {
    type: string,
    payload: any;
}