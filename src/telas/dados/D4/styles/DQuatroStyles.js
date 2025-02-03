import React from "react";
import { StyleSheet, View } from "react-native";

export const DQuatroStyles = StyleSheet.create ({
    button: {
        overflow: 'hidden',
        position: 'absolute',
        height: '17.5%',
        width: '30%',
        top: '70%',
        right: '1%'
      },
    image: {
        height: '100%',
        width: '120%',
        flex: 1,
        alignSelf: 'center', 
        transform: [{ scale: 1.1}],
    },
    Number: {
        position: 'absolute',
        alignSelf: 'center',
        top: '50%',
        fontSize: 45,
        left: '35.5%',
        color: 'white',
        fontFamily: "04B_30__",
    }
});
