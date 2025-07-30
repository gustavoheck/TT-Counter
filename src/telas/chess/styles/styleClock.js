import { StyleSheet } from "react-native";

export const styleClock = StyleSheet.create({
	timerText: {
		fontSize: 45,
		color: 'white',
		textAlign: 'center',
		fontFamily: '04B_30__',
		textAlignVertical: 'center',
		
	},
	timerTextContainer: {
		top: '57.5%',
		alignSelf: 'center',
		position: "absolute",
		flexDirection: 'row',
		width: 279,
		alignItems: 'center'
	},
	image: {
		alignSelf: 'center',
		resizeMode: 'contain',
		width: '100%',
		flex: 1
	},
	firstClockButton: {
		height: '30%',
		top: '10%',
		transform: [{ rotateY: '180deg' }, { rotateX: '180deg' }, {scale: 0.9}],
	},
	secondClockButton: {
		height: '30%',
		top: '25%',
		transform: [{scale: 0.9}],
	},
	resetButton: {
		top: '80%',
		alignSelf: 'center',
		transform: [{ scale: 0.4 }],
		position: "absolute",
	}
});