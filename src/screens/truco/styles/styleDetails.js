import { StyleSheet } from "react-native";

export const styleDetails = StyleSheet.create({
	winsText: {
		position: "absolute",
		color: 'white',
		fontFamily: "04B_30__",
		fontSize: 30,
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: 5, height: 1 },
		textShadowRadius: 10,
		alignSelf: 'center',
		top: "2%"
	},
	title: {
		position: "absolute",
		alignSelf: 'center',
        color: 'white',
		fontFamily: "04B_30__",
		fontSize: 30,
        marginTop: '1%',
	},
	midVerticalLine: {
		borderLeftWidth: 2,
		borderLeftColor: 'white',
		height: '95%',
		position: "absolute",
		alignSelf: 'center',
		bottom: '0%'
	},
	winsHorizontalLine: {
		borderWidth: 1,
		borderColor: 'white',
		top: '60%'
	},
	titleHorizontalLine: {
		borderWidth: 1,
		borderColor: 'white',
		top: '4.5%'
	}
});