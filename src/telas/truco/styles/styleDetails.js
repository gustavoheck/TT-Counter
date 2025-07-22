import { StyleSheet } from "react-native";

export const styleDetails = StyleSheet.create({
    WinsText: {
        position: "absolute",
        color: 'white',
        fontFamily: "04B_30__",
        fontSize: 30,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 5, height: 1},
        textShadowRadius: 10,
        alignSelf: 'center',
        top: "2%"
    },
    Title: {
        position: "absolute",
        transform:[{scale: 0.3}],
        bottom: '91.5%'
    },
    midVerticalLine: {
        borderLeftWidth: 2,
        borderLeftColor: 'white',
        height: '95%',
        position: "absolute",
        alignSelf: 'center',
        bottom: '0%'       
    },
});