import { StyleSheet, TouchableOpacity, Image, } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import arrow from '../assets/images/blackReturnArrow.png';
import whiteArrow from '../assets/images/whiteReturnArrow.png';

export default function ReturnButton({ color = "" }) {
	const navigation = useNavigation()
	let returnImage;
	switch (color.toUpperCase()) {
		case "": {
			returnImage = arrow;
			break;
		};
		case "WHITE": {
			returnImage = whiteArrow;
			break
		};
		case "BLACK": {
			returnImage = arrow;
			break;
		};
		default: {
			console.error("Invalid color prop for ReturnButton. Expected 'white', or 'black'. Received: " + color + ".\nThe default color is black!.");
			break;
		};
	};

	return <>
		<TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
			<Image
				source={returnImage}
				style={styles.returnImage}
			/>
		</TouchableOpacity>
	</>
};
const styles = StyleSheet.create({
	returnImage: {
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