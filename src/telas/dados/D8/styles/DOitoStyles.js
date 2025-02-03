import React from "react";
import { StyleSheet } from "react-native";

export const DOitoStyles = StyleSheet.create ({
    button: {
        overflow: 'hidden',
        position: 'absolute',
        height: '17.5%',
        width: '30%',
        top: '70%',
      },
    image: {
        height: '15%',
        width: '120%',
        flex: 1,
        alignSelf: 'center', 
        transform: [{ scale: 1}],

    },
    Number: {
        position: 'absolute',
        alignSelf: 'center',
        top: '34.5%',
        fontSize: 50,
        color: 'white',
        fontFamily: "04B_30__"
    }
});
