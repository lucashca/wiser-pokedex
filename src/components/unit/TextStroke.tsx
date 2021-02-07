
import React from "react";

import { Svg, Defs, LinearGradient, Stop, Text } from "react-native-svg";



export function TextStroke({ text, style }: any) {

    return (
        <Svg style={style} height="120" width="800">
            <Defs>
                <LinearGradient id="text-fill-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <Stop offset="0%" stopColor="rgb(255,255,255)" stopOpacity="0.3" />
                    <Stop offset="100%" stopColor="rgb(255,255,255)" stopOpacity="0" />
                </LinearGradient>
            </Defs>
            <Text
                fill="none"
                stroke="url(#text-fill-grad)"
                strokeWidth="1.5"
                fontSize="100"
                fontWeight="700"
                x="180"
                y="100"
                textAnchor="middle"
                letterSpacing='5'
                fontFamily='SFProDisplay-Regular'
            >
                {text}
            </Text>
        </Svg>
    );

}