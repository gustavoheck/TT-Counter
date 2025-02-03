import React from "react";
import { StyleSheet } from "react-native";

export const stylesReset = StyleSheet.create ({
    ResetPoints: {
        position: 'absolute',
        bottom: '2%',
        alignSelf: 'center'
      },
      resetText: {
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 8, height: 1},
        textShadowRadius: 10,
        fontSize: 19,
        color: 'white',
        fontFamily: "04B_30__",
        textAlign: 'center',
      },
      resetWins: {
        position: 'absolute',
        bottom: '2%',
        alignSelf: 'center'
      },
});