import React, { useRef } from "react";
import { View, TouchableOpacity, Image } from "react-native";

import Return from "../../globalComponents/return";

import { ChessClock } from "./components/ChessClock";
import Details from "./components/Details";
import ChessNameInput from "./components/ChessNameInput";

import { styleNames } from "./styles/styleNames";
import { styleClock } from "./styles/styleClock";

import restart from "./images/restart.png"

export default function Chess() {
	const clockOneRef = useRef(null);
	const clockTwoRef = useRef(null);

	const reset = () => {
		clockOneRef.current?.resetTimer();
		clockTwoRef.current?.resetTimer();
	};

	return <>
		<View style={{ flex: 1, backgroundColor: 'black' }}>
			<Return
				color={"white"}
			/>
			<ChessNameInput
				choosedName={"Player One"}
				styleName={styleNames.nameOne}
			/>
			<ChessClock
				ref={clockOneRef}
				styleButton={styleClock.firstClockButton}
				onPress={() => {
					clockOneRef.current?.stopTimer()
					clockTwoRef.current?.startTimer()
				}}
				winMessage={"O jogador dois ganhou por tempo!"}
			/>
			<ChessNameInput
				choosedName={"Player Two"}
				styleName={styleNames.nameTwo}
			/>
			<ChessClock
				ref={clockTwoRef}
				styleButton={styleClock.secondClockButton}
				onPress={() => {
					clockTwoRef.current?.stopTimer()
					clockOneRef.current?.startTimer()
				}}
				winMessage={"O jogador um ganhou por tempo!"}
			/>
			<TouchableOpacity style={styleClock.resetButton} onPress={reset}>
				<Image
					source={restart}
				/>
			</TouchableOpacity>
			<Details />
		</View>
	</>
};