import React from "react";
import { StyleSheet } from "react-native";

export const styleReset = StyleSheet.create ({
    resetText: {
      fontSize: 20,
      color: 'white',
      fontFamily: '04B_30__',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: 1, height: 1},
      textShadowRadius: 10
    },
    resetButton: {
      position:'absolute',
      bottom: '0.75%',
      alignSelf: 'center'
    }
  });