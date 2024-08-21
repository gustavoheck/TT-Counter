import React from "react";
import { StyleSheet, View } from "react-native";

export const DDezStyles = StyleSheet.create ({
    button: {
        overflow: 'hidden',
        position: 'absolute',
        height: '20%',
        width: '37.5%',
        top: '77.5%',
        left: '31.25%'
      },
    image: {
        height: '20%',
        width: '120%',
        flex: 1,
        alignSelf: 'center', 
        transform: [{ scale: 0.85}],

    },
    Number: {
        position: 'absolute',
        alignSelf: 'center',
        top: '23%',
        fontSize: 40,
        color: 'black'
    }
});
