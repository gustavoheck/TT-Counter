import React from "react";
import { StyleSheet } from "react-native";

export const DSeisStyles = StyleSheet.create ({
    button: {
        overflow: 'hidden',
        position: 'absolute',
        height: '35%',
        width: '70%',
    },
    image: {
        height: '80%',
        width: '80%',
        transform: [{ scale: 1.57}],
        flex: 1,
        alignSelf: 'center'
    },
});