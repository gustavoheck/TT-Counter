import React from "react";
import { StyleSheet } from "react-native";

export const stylesEles = StyleSheet.create({
    threeElesText: {
        fontSize: 30,
        color: 'white',
        fontFamily: "04B_30__",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 8, height: 1},
        textShadowRadius: 10,
    },
    oneElesText: {
        fontSize: 40,
        color: 'white',
        fontFamily: "04B_30__",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 8, height: 1},
        textShadowRadius: 10,
        position: 'absolute'
    },
    oneElesButton: {
        alignSelf: 'center',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        left: '20%',
        top: '55%',
    },
    oneElesButtonMinus: {
        alignSelf: 'center',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        right: '20%',
        top: '55%',
    },
    threeElesButton: {       
        alignSelf: 'center',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        left: '15%',
        top: '75%',
    },
    threeElesButtonMinus: {
        alignSelf: 'center',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        right: '15%',
        top: '75%',
    },
    ElesWins: {
        fontSize: 80,
        color: 'white',
        fontFamily: "04B_30__",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 5, height: 1},
        textShadowRadius: 10,
        position: 'absolute',
        alignSelf: 'center',
        top: '35%'
    },
    pointCountEles: {
        fontSize: 100,
        color: 'white',
        fontFamily: "04B_30__",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 10, height: 1},
        textShadowRadius: 10,
        position: 'absolute',
        alignSelf: 'center',
        top: '25%'
      },
}); 