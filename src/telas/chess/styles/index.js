import React from "react";
import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    secs: {
        fontSize: 60,
        color: 'white',
        textAlign: 'right',
        position: "absolute",
        top: '52.5%',
        left: '5.5%',
        right: '5.5%',
        paddingRight: '11%',
        fontFamily: '04B_30__',

    },
    mins: {
        fontSize: 60,
        color: 'white',
        textAlign: 'center',
        position: "absolute",
        top: '52.5%',
        left: '5.5%',
        right: '5.5%',
        paddingRight: '32.5%',
        fontFamily: '04B_30__',
    },

    twoPoints: 
        {
        fontSize: 50,
        color: 'white',
        alignSelf: 'center',
        position: "absolute",
        top: '53.5%',
        right: '46.5%',
        fontFamily: "04B_30__",
        },

    image: 
    {
        transform: [{ scale: 1.4}],
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