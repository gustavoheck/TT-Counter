import { StyleSheet } from "react-native";

export const styleMenu = StyleSheet.create({
	image: {
		alignSelf: 'center',
		height: '100%',
		width: '100%',
		transform: [{ scale: 1 }]
	},
	diceButton: {
		bottom: '35%',
		position: 'absolute',
		height: '20%',
		width: '40%',
		left: '5%'
	},
	trucoButton: {
		bottom: '35%',
		position: 'absolute',
		height: '20%',
		width: '40%',
		right: '5%'
	},
	genericButton: {
		bottom: '10%',
		position: 'absolute',
		height: '20%',
		width: '40%',
		left: '5%'
	},
	chessButton: {
		bottom: '10%',
		position: 'absolute',
		height: '20%',
		width: '40%',
		right: '5%'
	},
	menuImage: {
		alignSelf: 'center',
		position: 'absolute',
		height: '50%',
		width: '110%',
		bottom: '55%',
		transform: [{ scale: 0.80}]
	}
});