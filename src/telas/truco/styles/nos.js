import React from "react";
import { StyleSheet } from "react-native";

export const stylesNos = StyleSheet.create({
    threeNosText: {
        fontSize: 30,
        fontFamily: "04B_30__",
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 8, height: 1},
        textShadowRadius: 10,
    },
    oneNosText: {
        fontSize: 40,
        color: 'white',
        fontFamily: "04B_30__",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 8, height: 1},
        textShadowRadius: 10,
        position: 'absolute'
    },
    oneNosButton: {
        alignSelf: 'center',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        left: '20%',
        top: '55%',
    },
    oneNosButtonMinus: {
        alignSelf: 'center',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        right: '20%',
        top: '55%',
    },
    threeNosButton: {
        alignSelf: 'center',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        left: '15%',
        top: '75%',
    },
    threeNosButtonMinus: {
        alignSelf: 'center',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        right: '15%',
        top: '75%',
    },
    NosWins: {
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
    pointCountNos: {
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