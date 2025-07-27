import { StyleSheet } from "react-native";

export const styleNames = StyleSheet.create({
    nameOne: {
        position: 'absolute',
        fontSize: 30,
        color: "white",
        alignSelf: "center",
        bottom: "55%",
        fontFamily: "04B_30__",
        transform: [ {rotateY: '180deg'},{rotateX: '180deg'}]
    },
    nameTwo: {
        position: 'absolute',
        fontSize: 30,
        color: "white",
        alignSelf: "center",
        top: "50%",
        fontFamily: "04B_30__",
    }
});