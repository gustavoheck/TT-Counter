import { StyleSheet } from "react-native";

export const styleDetails = StyleSheet.create({
    title: {
        position: "absolute",
		alignSelf: 'center',
        color: 'white',
		fontFamily: "04B_30__",
		fontSize: 25,
        marginTop: '1.25%',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: 0.5, height: 1.5 },
		textShadowRadius: 10,
    },
	topDivider: {
        borderBottomWidth: 4,
        borderBottomColor: 'white',
        position: 'absolute',
        alignSelf: 'center',
        top: '4.5%',
        width: '100%',
    },
    middleDivider: {
        borderBottomWidth: 4,
        borderBottomColor: 'white',
        position: 'absolute',
        alignSelf: 'center',
        top: '49.7%',
        width: '100%',
    },
});