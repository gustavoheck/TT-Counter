import { StyleSheet } from "react-native";

export const styleCounter = StyleSheet.create({
	threeText: {
		fontSize: 30,
		color: 'white',
		fontFamily: "04B_30__",
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: 8, height: 1 },
		textShadowRadius: 10,
	},
	oneText: {
		fontSize: 40,
		color: 'white',
		fontFamily: "04B_30__",
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: 8, height: 1 },
		textShadowRadius: 10,
		position: 'absolute',
	},
	oneButtonAdd: {
		alignSelf: 'center',
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		left: '20%',
		top: '55%',
	},
	oneButtonMinus: {
		alignSelf: 'center',
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		right: '20%',
		top: '55%',
	},
	threeButtonAdd: {
		alignSelf: 'center',
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		left: '15%',
		top: '75%',
	},
	threeButtonMinus: {
		alignSelf: 'center',
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		right: '15%',
		top: '75%',
	},
	winsCount: {
		fontSize: 80,
		color: 'white',
		fontFamily: "04B_30__",
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: 5, height: 1 },
		textShadowRadius: 10,
		position: 'absolute',
		alignSelf: 'center',
		top: '122%'
	},
	pointCount: {
		fontSize: 100,
		color: 'white',
		fontFamily: "04B_30__",
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: 10, height: 1 },
		textShadowRadius: 10,
		position: 'absolute',
		alignSelf: 'center',
		top: '18.5%'
	}
}); 