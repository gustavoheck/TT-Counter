import { StyleSheet } from "react-native";

export const styleClock = StyleSheet.create({
	timerText: {
		fontSize: 45,
		color: 'white',
		textAlign: 'center',
		fontFamily: '04B_30__',
		textAlignVertical: 'center',
		alignSelf: 'center',
	},
	timerTextContainer: {
		top: '57.5%',
		maxWidth: '29%',
		alignSelf: 'center',
		position: "absolute",
		left: '15.5%',
		flexDirection: 'row',
	},
	image: {
		alignSelf: 'center',
		resizeMode: "contain",
		flex: 1
	},
	firstClockButton: {
		height: '30%',
		top: '10%',
		transform: [{ rotateY: '180deg' }, { rotateX: '180deg' }, { scale: 0.9 }]
	},
	secondClockButton: {
		height: '30%',
		top: '25%',
		transform: [{ scale: 0.9 }],
	},
	resetButton: {
		top: '77.5%',
		alignSelf: 'center',
		transform: [{ scale: 0.4 }],
		position: "absolute"
	}
});