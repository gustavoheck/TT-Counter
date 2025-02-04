import React from "react";
import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    Name1:
    {
        position: 'absolute',
        fontSize: 30,
        color: "white",
        alignSelf: "center",
        bottom: "55%",
        fontFamily: "04B_30__",
        transform: [ {rotateY: '180deg'},{rotateX: '180deg'}]
    },
    Name2:
    {
        position: 'absolute',
        fontSize: 30,
        color: "white",
        alignSelf: "center",
        top: "50%",
        fontFamily: "04B_30__",
    }
})