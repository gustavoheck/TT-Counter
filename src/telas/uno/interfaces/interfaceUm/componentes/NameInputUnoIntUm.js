import React, { useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";


export default function NameInputUnoIntUm({ playerName, styleText }) {
	if (playerName == "" || playerName == null || playerName == undefined) {
		console.error("É necessário definir um nome de jogador");
	}
	const [player, setPlayer] = useState();
	if (styleText == undefined) {
		styleText = styles.name;
	}
	return <>
		<TextInput
			onChangeText={(inputValue) => setPlayer(inputValue)}
			keyboardType="default"
			defaultValue={playerName}
			color="white"
			style={styleText}
			underlineColorAndroid="transparent"
			textAlign="center"
			maxLength={15}
		/>
	</>
};

const styles = StyleSheet.create({
	name: {
		fontSize: 25,
		position: 'absolute',
		alignSelf: 'center',
		width: '100%',
		fontFamily: "04B_30__",
		top: '8%',
		right: '0%',
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: 5, height: 1 },
		textShadowRadius: 10,
	},
});