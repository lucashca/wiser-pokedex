import { Component } from "react";

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
    pokemonsList: PokemonItemList[],
    searchInputText: string,
    nextUrl: string,
    backUrl: string;
}
export interface ActionRedux {
    type: string,
    value: any;
}