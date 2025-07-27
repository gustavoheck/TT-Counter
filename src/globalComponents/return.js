import React from 'react';
import { StyleSheet, TouchableOpacity, Image, } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import arrow from '../../assets/arrow.png';
import arrowWhite from '../../assets/arrowWhite.png';

export default function Return({ color = "" }) {
	const navigation = useNavigation()
	let imagem;
	switch (color.toUpperCase()) {
		case "": {
			imagem = arrow;
			break;
		};
		case "WHITE": {
			imagem = arrowWhite;
			break
		};
		case "BLACK": {
			imagem = arrow;
			break;
		};
		default: {
			console.error("Cor inválida use white ou black");
			break;
		};
	};

	return <>
		<TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
			<Image
				source={imagem}
				style={styles.image}
			/>
		</TouchableOpacity>
	</>
};
const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: '95%',
		resizeMode: 'contain'
	},
	button: {
		width: '15%',
		height: '5%',
		position: 'absolute',
		right: '87.5%',
		transform: [{scale: 0.8}]
	}
});