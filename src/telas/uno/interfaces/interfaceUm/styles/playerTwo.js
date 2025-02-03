import React from "react";
import { StyleSheet } from "react-native";

export const stylesTwo = StyleSheet.create ({
    wins: {
        position: 'absolute',
        fontSize: 150,
        color: 'white',
        alignSelf: 'center',
        top: '40%',
        fontFamily: "04B_30__",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 5, height: 1},
        textShadowRadius: 10,
    },
    buttonAdd:{
        position: 'absolute', 
        fontSize: 35,
        color: 'white',
        left: '3%',
        top: '50%',
        fontFamily: "04B_30__",
    },
    buttonMinus:{
        position: 'absolute', 
        fontSize: 35,
        color: 'white',
        right: '3%',
        top: '50%',
        fontFamily: "04B_30__",
    },
    winText: {
        fontSize: 50,
        color: 'white',
        position: 'absolute',
        alignSelf: 'center',
        top: '10%',
        fontFamily: "04B_30__",
        top: '25%',
        right: '32%',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 5, height: 1},
        textShadowRadius: 10,
    },
});