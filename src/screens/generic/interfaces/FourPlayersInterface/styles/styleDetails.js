import { StyleSheet } from "react-native";

export const styleDetails = StyleSheet.create({
    title: {
        position: "absolute",
		alignSelf: 'center',
        color: 'white',
		fontFamily: "04B_30__",
		fontSize: 25,
        marginTop: '1%',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: 0.5, height: 1.5 },
		textShadowRadius: 10,
    },
    verticalDividerBlack: {
        borderLeftWidth: 4,
        borderLeftColor: 'black',
        alignSelf: 'center',
        height: '90.5%',
        position: 'absolute',
        bottom: '4%',
    },
    horizontalDividerBlack: {
        borderBottomWidth: 4,
        borderBottomColor: 'black',
        position: 'absolute',
        alignSelf: 'center',
        top: '50%',
        width: '100%',
    },
});