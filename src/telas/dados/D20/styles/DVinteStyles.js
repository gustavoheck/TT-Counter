import React from "react";
import { StyleSheet } from "react-native";

export const DVinteStyles = StyleSheet.create ({
    button: {
        overflow: 'hidden',
        position: 'absolute',
        height: '25.5%',
        width: '50%',
        top: '5%',
      },
    image: {
        height: '10%',
        width: '100%',
        flex: 1,
        alignSelf: 'center', 
        transform: [{ scale: 0.80}],

    },
    Number: {
        position: 'absolute',
        alignSelf: 'center',
        top: '39%',
        fontSize: 30,
        color: 'black'
    }
});
