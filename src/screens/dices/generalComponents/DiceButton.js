import { useState } from "react";
import { Text, TouchableOpacity, ImageBackground, } from "react-native";
import { DiceButtonStyles } from "./DiceButtonStyles";

export default function DiceButton
({ minNumber, maxNumber, diceImage, diceNumber, placeholder}){

	const [number, setNumber] = useState(1);

	const rollDice = () => {
		const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
		setNumber(randomNumber);
	};

	/* if (diceImageStyle === undefined || diceImageStyle === null || numberStyle === undefined || numberStyle === null) {
		if (numberStyle === undefined || numberStyle === null) {
			numberStyle = styleDiceButton.number;

		};
		if (diceImageStyle === undefined || diceImageStyle === null) {
			diceImageStyle = styleDiceButton.image;
		};
	}; */

	return <>
		<TouchableOpacity onPress={rollDice} style={DiceButtonStyles.button}>
			<ImageBackground
				source={diceImage}
				style={DiceButtonStyles.image}
				imageStyle={DiceButtonStyles.imageStyle}
			>
				<Text style={[DiceButtonStyles.number, diceNumber]}>{number}</Text>
			</ImageBackground>
			<Text style={DiceButtonStyles.placeholder}>{placeholder}</Text>
		</TouchableOpacity>
	</>
};