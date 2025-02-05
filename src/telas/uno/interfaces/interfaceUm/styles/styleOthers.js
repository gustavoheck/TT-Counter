import React from "react";
import { StyleSheet } from "react-native";

export const styleOthers = StyleSheet.create ({
    Title: {
        color: 'white',
        transform: [{scale: 0.4}],
        position: 'absolute',
        alignSelf: 'center',
        bottom: '91.75%'
    },
    buttonsText: {
        color: 'white',
        fontFamily: "04B_30__",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 5, height: 1},
        textShadowRadius: 10,
        fontSize: 60,
    },
    resetText: {
        fontSize: 20,
        color: 'white',
        fontFamily: "04B_30__",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 5, height: 1},
        textShadowRadius: 10,
    },
      resetButton: {
        position:'absolute',
        bottom: '1%',
        alignSelf: 'center'
    }
});