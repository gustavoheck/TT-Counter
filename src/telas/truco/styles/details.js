import React from "react";
import { StyleSheet } from "react-native";

export const stylesDetails = StyleSheet.create({
    WinsText: {
        position: "absolute",
        color: 'white',
        fontFamily: "04B_30__",
        fontSize: 30,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 5, height: 1},
        textShadowRadius: 10,
        alignSelf: 'center',
        top: "2%"
    },
    Title: {
        position: "absolute",
        transform:[{scale: 0.4}],
        bottom: '91.75%'
    },
    midVerticalLine: {
        borderLeftWidth: 2,
        borderLeftColor: 'white',
        height: '95%',
        position: "absolute",
        alignSelf: 'center',
        bottom: '0%'       
    },
});