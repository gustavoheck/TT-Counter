import { useRef } from "react";
import { View, TouchableOpacity, Text, Alert } from "react-native";
//Styles
import { styleViews } from "./styles/styleViews";
import { styleReset } from "./styles/styleReset";
//Components
import Details from "./components/Details";
import FourPlayerCounter from "./components/FourPlayersCounter";
import FourPlayersNameInput from "./components/FourPlayersNameInput";

export default function FourPlayersInterface() {
	const counterBlue = useRef(null);
	const counterRed = useRef(null);
	const counterGreen = useRef(null);
	const counterYellow = useRef(null);

	const resetWinsOnPress = () =>
		Alert.alert('Reset Wins', 'Do you really want to reset all scoreboards?', [
			{
				text: 'Cancel',
				onPress: () => console.log('Cancel Pressed'),
				style: 'cancel',
			},
			{
				text: 'Reset', onPress: () => {
					counterBlue.current?.resetWins(),
						counterGreen.current?.resetWins(),
						counterRed.current?.resetWins(),
						counterYellow.current?.resetWins()
				}
			},
		]);

	const ResetWins = () => {
		return <>
			<TouchableOpacity onPress={resetWinsOnPress} style={styleReset.resetButton}><Text style={styleReset.resetText}>Reset Wins</Text></TouchableOpacity>
		</>
	};

	return <>
		<View style={styleViews.blue}>
			<FourPlayersNameInput choosedName="Blue" />
			<FourPlayerCounter ref={counterBlue} />
		</View>

		<View style={styleViews.green}>
			<FourPlayersNameInput choosedName="Green" />
			<FourPlayerCounter ref={counterGreen} />
		</View>

		<View style={styleViews.red}>
			<FourPlayersNameInput choosedName="Red" />
			<FourPlayerCounter ref={counterRed} />
		</View>

		<View style={styleViews.yellow}>
			<FourPlayersNameInput choosedName="Yellow" />
			<FourPlayerCounter ref={counterYellow} />
		</View>

		<ResetWins />
		<Details />
	</>
};