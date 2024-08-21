import React from "react";
import { StyleSheet, View } from "react-native";

export const DQuatroStyles = StyleSheet.create ({
    button: {
        overflow: 'hidden',
        position: 'absolute',
        height: '17.5%',
        width: '30%',
        top: '70%',
        right: '0%'
      },
    image: {
        height: '10%',
        width: '120%',
        flex: 1,
        alignSelf: 'center', 
        transform: [{ scale: 0.75}],
    },
    Number: {
        position: 'absolute',
        alignSelf: 'center',
        top: '32.5%',
        fontSize: 50,
        color: 'black'
    }
});
