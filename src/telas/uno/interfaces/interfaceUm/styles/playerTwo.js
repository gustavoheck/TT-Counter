import React from "react";
import { StyleSheet } from "react-native";

export const stylesTwo = StyleSheet.create ({
    Loses: {
        position: 'absolute',
        fontSize: 150, 
        color: 'black',
        alignSelf: 'center',
        top: '25%'
    },
    Wins: {
        position: 'absolute',
        fontSize: 150,
        color: 'black',
        alignSelf: 'center',
        top: '25%'
    },
    ButtonAdd:{
        position: 'absolute', 
        fontSize: 35,
        color: 'black',
        left: '15%',
        top: '65%'
    },
    ButtonMinus:{
        position: 'absolute', 
        fontSize: 35,
        color: 'black',
        right: '15%',
        top: '65%'
    },
});