import { StyleSheet } from "react-native";

export const styleCounter = StyleSheet.create({
	points: {
		color: 'white',
		fontSize: 55,
		fontFamily: '04B_30__',
		alignSelf: 'center',
		textAlign: 'center',
		top: '80%',
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: 0.5, height: 1.5 },
		textShadowRadius: 10,
		position: 'absolute',
	},
	points2r: {
		textAlign: 'center',
		alignSelf: 'center',
		color: 'white',
		fontSize: 45,
		fontFamily: '04B_30__',
		top: '70%',
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 10,
		position: 'absolute',
	},
	points3r: {
		textAlign: 'center',
		color: 'white',
		alignSelf: 'center',
		fontSize: 45,
		fontFamily: '04B_30__',
		top: '70%',
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 10,
		position: 'absolute'
	},

	firstButton: {
		top: '12.5%',
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: 'black',
		position: 'absolute',
	},
	secondButton: {
		top: '50%',
		right: '35%',
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
	},
	thirdButton: {
		top: '50%',
		left: '35%',
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
	}
});