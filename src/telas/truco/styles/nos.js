import React from "react";
import { StyleSheet } from "react-native";

export const stylesNos = StyleSheet.create({
    threeNosText: {
        fontSize: 30,
        fontFamily: 'Carter One Regular',
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 8, height: 1},
        textShadowRadius: 10,
    },
    oneNosText: {
        fontSize: 60,
        color: 'white',
        fontFamily: 'Carter One Regular',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 8, height: 1},
        textShadowRadius: 10,
    },
    oneNosButton: {
        left: '10%',
        position: 'absolute',
        top: '50%'
    },
    oneNosButtonMinus: {
        right: '10%',
        position: 'absolute',
        top: '50%'
    },
    threeNosButton: {
        left: '25%',
        position: 'absolute',
        top: '65%'
    },
    threeNosButtonMinus: {
        right: '25%',
        position: 'absolute',
        top: '65%'
    },
    NosWins: {
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
    pointCountNos: {
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