import { useState } from 'react';
import { TouchableOpacity, Image } from 'react-native';

import { D6Styles } from '../styles/D6Styles';

import diceOne from '../images/dice0.png';
import diceTwo from '../images/dice1.png';
import diceThree from '../images/dice2.png';
import diceFourt from '../images/dice3.png';
import diceFive from '../images/dice4.png';
import diceSix from '../images/dice5.png';

const diceImages = {
	1: diceOne,
	2: diceTwo,
	3: diceThree,
	4: diceFourt,
	5: diceFive,
	6: diceSix,
};

export default function D6() {
	const [number, setNumber] = useState(1);

	const rollDice = () => {
		const randomNumber = Math.floor(1 + Math.random() * 6);
		setNumber(randomNumber);
	};

	return (
		<>
			<TouchableOpacity onPress={rollDice} style={D6Styles.button}>
				<Image
					source={diceImages[number]}
					style={D6Styles.image}
					resizeMode='cover'
				/>
			</TouchableOpacity>
		</>
	);
};
