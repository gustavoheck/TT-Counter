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
        transform: [{ scale: 0.90}],

    },
    Number: {
        position: 'absolute',
        textAlign: 'center',
        top: '35%',
        right: '10%',
        left: '10%',
        fontSize: 60,
        color: 'black',
        fontFamily: "04B_30__"
    }
});
