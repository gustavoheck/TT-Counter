import { StyleSheet } from "react-native";

export const styleMenu = StyleSheet.create({
	imagem: {
		alignSelf: 'center',
		height: '100%',
		width: '100%',
		transform: [{ scale: 1 }]
	},
	botaoDado: {
		bottom: '35%',
		position: 'absolute',
		height: '20%',
		width: '40%',
		left: '5%'
	},
	botaoTruco: {
		bottom: '35%',
		position: 'absolute',
		height: '20%',
		width: '40%',
		right: '5%'
	},
	botaoUno: {
		bottom: '10%',
		position: 'absolute',
		height: '20%',
		width: '40%',
		left: '5%'
	},
	botaoXadrez: {
		bottom: '10%',
		position: 'absolute',
		height: '20%',
		width: '40%',
		right: '5%'
	},
	imagemMenu: {
		alignSelf: 'center',
		position: 'absolute',
		height: '50%',
		width: '110%',
		bottom: '55%',
		transform: [{ scale: 0.80}]
	}
});