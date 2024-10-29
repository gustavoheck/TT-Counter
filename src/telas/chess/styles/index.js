import React from "react";
import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    secs: {
        fontSize: 50,
        color: 'white',
        fontWeight: "bold",
        alignSelf: 'center',
        position: "absolute",
        top: '40%',
        right: '28%'},
    mins: {
        fontSize: 50,
        color: 'white',
        fontWeight: "bold",
        alignSelf: 'center',
        position: "absolute",
        top: '40%',
        left: '30%'},

    twoPoints: 
        {
            fontSize: 50,
            color: 'white',
            fontWeight: "bold",
            alignSelf: 'center',
            position: "absolute",
            top: '38%',
            right: '47.5%'
        },

    image: 
    {
        transform: [{ scale: 0.85}],
        alignSelf: 'center',
        resizeMode: "contain",
        flex: 1
    },
    button1: {
        height: '30%',
        top: '10%',
        transform: [ {rotateY: '180deg'}, {rotateX: '180deg'} ]
    },
    button2: {
        height: '30%',
        top: '25%'
    }
});