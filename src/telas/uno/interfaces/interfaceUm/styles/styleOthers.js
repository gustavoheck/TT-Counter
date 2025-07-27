import { StyleSheet } from "react-native";

export const styleOthers = StyleSheet.create({
	Title: {
		color: 'white',
		transform: [{ scale: 0.4 }],
		position: 'absolute',
		alignSelf: 'center',
		bottom: '91.75%'
	},
	resetText: {
		fontSize: 20,
		color: 'white',
		fontFamily: "04B_30__",
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: 5, height: 1 },
		textShadowRadius: 10
	},
	resetButton: {
		position: 'absolute',
		bottom: '1%',
		alignSelf: 'center'
	},
	name: {
		fontSize: 25,
		position: 'absolute',
		alignSelf: 'center',
		width: '100%',
		fontFamily: "04B_30__",
		top: '0%',
		right: '0%',
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: 5, height: 1 },
		textShadowRadius: 10
	}
});