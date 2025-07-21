import { StyleSheet } from "react-native";

export const DOitoStyles = StyleSheet.create({
    button: {
        overflow: 'hidden',
        position: 'absolute',
        height: '17.5%',
        width: '30%',
        top: '70%',
        alignSelf: 'center',
        left: '0%',
        transform: [{ scale: 0.85}],
    },
    number: {
        position: 'absolute',
        textAlign: 'center',
        textAlignVertical: 'center',
        top: '32.5%',
        fontSize: 55,
        color: 'black',
        fontFamily: "04B_30__"
    }
});
