import React from "react";
import { StyleSheet } from "react-native";

export const stylesDetails = StyleSheet.create({
    WinsText: {
        position: "absolute",
        color: 'white',
        fontFamily: 'Carter One Regular',
        fontSize: 30,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 5, height: 1},
        textShadowRadius: 10,
        alignSelf: 'center'
    },
    Title: {
        position: "absolute",
        color: 'white',
        fontFamily: 'Carter One Regular',
        fontSize: 25,
        alignSelf: 'center',
        top:'0%',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 8, height: 1},
        textShadowRadius: 10
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