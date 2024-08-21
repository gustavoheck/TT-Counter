import React from "react";
import { StyleSheet } from "react-native";

export const stylesReset = StyleSheet.create ({
    ResetPoints: {
        position: 'absolute',
        bottom: '0%',
        alignSelf: 'center'
      },
      resetText: {
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 8, height: 1},
        textShadowRadius: 10,
        fontSize: 20,
        color: 'white',
        fontFamily: 'Carter One Regular',
        textAlign: 'center',
      },
      resetWins: {
        position: 'absolute',
        bottom: '0%',
        alignSelf: 'center'
      },
});