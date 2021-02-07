import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";


interface Props {
    progress: number,
    color: 'string',
    height: number;
}


export function StaticProgressBar({ progress, color, height }: Props) {

    return (
        <View style={{ height, backgroundColor: color, flex: progress, borderRadius: 5 }} />
    );

}


