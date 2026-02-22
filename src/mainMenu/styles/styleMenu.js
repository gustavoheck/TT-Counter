import { StyleSheet } from "react-native";

export const styleMenu = StyleSheet.create({
	image: {
		alignSelf: 'center',
		height: '100%',
		width: '100%',
	},
	menuButton: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		aspectRatio: 1,
		width: '40%',
		height: '40%', 
		margin: '5%',
		marginTop: '12.5%',
	},
	menuImage: {
		alignSelf: 'center',
		height: '40%',
		width: '100%',
		transform: [{ scale: 0.90}]
	},
	placeholder: {
		color: 'white',
		fontFamily: "04B_30__",
		fontSize: 30,
		textAlign: 'center',
  		marginTop: '2.5%',
	},
	buttonsContainer: {
		flexWrap: 'wrap',
		flex: 1,
		flexDirection: 'row',
	},
	menuContainer : {
		display: 'flex', 
		backgroundColor: '#261408',
		height: '100%', 
	}
});