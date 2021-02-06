import { Component } from "react";

export interface TypeInfoColor {
    name: string;
    backgroundColor: string;
    typeColor: string;
    icon: any;
}


export interface ActionRedux {
    type: string,
    value: any;
}