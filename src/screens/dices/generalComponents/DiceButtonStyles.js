import { Button, StyleSheet } from "react-native";

export const DiceButtonStyles = StyleSheet.create ({
    button: {
        width: '30%',
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle: {
        resizeMode: 'contain', 
    },
    number: {
        fontSize: 40,
        color: 'black',
        fontFamily: "04B_30__",
    },
    placeholder: {
        fontSize: 30,
        color: 'black',
        fontFamily: "04B_30__",
        alignSelf: "center",
        marginTop: "7.5%"
    },
});
