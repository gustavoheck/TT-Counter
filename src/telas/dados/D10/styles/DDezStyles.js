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
        height: '30%',
        width: '120%',
        flex: 1,
        alignSelf: 'center', 
        transform: [{ scale: 0.90}],

    },
    Number: {
        position: 'absolute',
        textAlign: 'center',
        right: '10%',
        left: '10%',
        top: '40%',
        fontSize: 50,
        color: 'black',
        fontFamily: "04B_30__"
    }
});
