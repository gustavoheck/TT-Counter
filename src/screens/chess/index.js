import { useRef } from "react";
import { View, TouchableOpacity, Image } from "react-native";

import ReturnButton from "../../globalComponents/ReturnButton";

import { ChessClock } from "./components/ChessClock";
import Details from "./components/Details";
import ChessNameInput from "./components/ChessNameInput";

import { styleNames } from "./styles/styleNames";
import { styleClock } from "./styles/styleClock";

import restart from "./images/restart.png"
import { useTranslation } from "react-i18next";

export default function Chess() {
	const { t } = useTranslation();

	const clockOneRef = useRef(null);
	const clockTwoRef = useRef(null);

	const reset = () => {
		clockOneRef.current?.resetTimer();
		clockTwoRef.current?.resetTimer();
	};

	return <>
		<View style={{ flex: 1, backgroundColor: 'black' }}>
			<ReturnButton
				color={"white"}
			/>
			<ChessNameInput
				choosedName={t('screensDefault.playerOneNameInput')}
				styleName={styleNames.nameOne}
			/>
			<ChessClock
				ref={clockOneRef}
				styleButton={styleClock.firstClockButton}
				onPress={() => {
					clockOneRef.current?.stopTimer()
					clockTwoRef.current?.startTimer()
				}}
				winMessage={t('chess.playerTwoWinMessage')}
				congrats={t('chess.winCongratulations')}
			/>
			<ChessNameInput
				choosedName={t('screensDefault.playerTwoNameInput')}
				styleName={styleNames.nameTwo}
			/>
			<ChessClock
				ref={clockTwoRef}
				styleButton={styleClock.secondClockButton}
				onPress={() => {
					clockTwoRef.current?.stopTimer()
					clockOneRef.current?.startTimer()
				}}
				winMessage={t('chess.playerOneWinMessage')}
				congrats={t('chess.winCongratulations')}
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