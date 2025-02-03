import React from "react";
import { StyleSheet, View } from "react-native";

export const DDozeStyles = StyleSheet.create ({
    button: {
        overflow: 'hidden',
        position: 'absolute',
        height: '25.5%',
        width: '50%',
        top: '5%',
        right: '0%',
      },
    image: {
        height: '10%',
        width: '100%',
        flex: 1,
        alignSelf: 'center', 
        transform: [{ scale: 0.95}],

    },
    Number: {
        position: 'absolute',
        alignSelf: 'center',
        top: '37.5%',
        fontSize: 60,
        color: 'white',
        fontFamily: "04B_30__"
    }
});
