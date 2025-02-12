import React from "react";
import { StyleSheet } from "react-native";

export const stylesOne = StyleSheet.create ({
    wins: {
        position: 'absolute',
        fontSize: 150, 
        color: 'white',
        alignSelf: 'center',
        fontFamily: "04B_30__",
        top: '45%',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 5, height: 1},
        textShadowRadius: 10,
    },
    buttonAdd:{
        position: 'absolute', 
        color: 'white',
        left: '3%',
        top: '55%',
    },
    buttonMinus:{
        position: 'absolute', 
        color: 'white',
        right: '3%',
        top: '55%',
    },
    winText: {
        fontSize: 50,
        color: 'white',
        position: 'absolute',
        alignSelf: 'center',
        fontFamily: "04B_30__",
        top: '30%',
        right: '32%',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 5, height: 1},
        textShadowRadius: 10,
    },
});