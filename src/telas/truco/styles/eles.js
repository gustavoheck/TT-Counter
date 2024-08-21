import React from "react";
import { StyleSheet } from "react-native";

export const stylesEles = StyleSheet.create({
    threeElesText: {
        fontSize: 30,
        color: 'white',
        fontFamily: 'Carter One Regular',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 8, height: 1},
        textShadowRadius: 10,
    },
    oneElesText: {
        fontSize: 60,
        color: 'white',
        fontFamily: 'Carter One Regular',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 8, height: 1},
        textShadowRadius: 10,
    },
    oneElesButton: {
        left: '10%',
        position: 'absolute',
        top: '50%'
    },
    oneElesButtonMinus: {
        right: '10%',
        position: 'absolute',
        top: '50%'
    },
    threeElesButton: {       
        left: '25%',
        position: 'absolute',
        top: '65%'
    },
    threeElesButtonMinus: {
        right: '25%',
        position: 'absolute',
        top: '65%'
    },
    ElesWins: {
        fontSize: 80,
        color: 'white',
        fontFamily: 'Carter One Regular',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 5, height: 1},
        textShadowRadius: 10,
        position: 'absolute',
        alignSelf: 'center',
        top: '30%'
    },
    pointCountEles: {
        fontSize: 100,
        color: 'white',
        fontFamily: 'Carter One Regular',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 10, height: 1},
        textShadowRadius: 10,
        position: 'absolute',
        alignSelf: 'center',
        top: '25%'
      },
}); 