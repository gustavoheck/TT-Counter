import { useState } from "react";
import { Text, TouchableOpacity, ImageBackground, } from "react-native";
import { styleDiceButton } from "../styles/styleDiceButton";

export default function DiceButton({ minNumber, maxNumber, diceImage, diceStyle, numberStyle, diceImageStyle }) {
	const [number, setNumber] = useState(1);

	const rollDice = () => {
		const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
		setNumber(randomNumber);
	};

	if (diceImageStyle === undefined || diceImageStyle === null || numberStyle === undefined || numberStyle === null) {
		if (numberStyle === undefined || numberStyle === null) {
			numberStyle = styleDiceButton.number;

		};
		if (diceImageStyle === undefined || diceImageStyle === null) {
			diceImageStyle = styleDiceButton.image;
		};
	};

	return <>
		<TouchableOpacity onPress={rollDice} style={diceStyle}>
			<ImageBackground
				source={diceImage}
				style={diceImageStyle}
			>
				<Text style={numberStyle}>{number}</Text>
			</ImageBackground>

		</TouchableOpacity>
	</>
};