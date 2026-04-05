import { useRef } from "react";
import { View, TouchableOpacity, Text, Alert } from "react-native";
import { useTranslation } from "react-i18next";
//Styles
import { styleViews } from "./styles/styleViews";
import { styleReset } from "./styles/styleReset";
//Components
import Details from "./components/Details";
import FourPlayerCounter from "./components/FourPlayersCounter";
import FourPlayersNameInput from "./components/FourPlayersNameInput";

export default function FourPlayersInterface() {
	const { t } = useTranslation()

	const counterBlue = useRef(null);
	const counterRed = useRef(null);
	const counterGreen = useRef(null);
	const counterYellow = useRef(null);

	const resetWinsOnPress = () =>
		Alert.alert(t('generic.genericScoreboardsDefault.resetAlertReset'),
					t('generic.genericScoreboardsDefault.resetAlert'), [
			{
				text: t('generic.genericScoreboardsDefault.resetAlertCancel'),
				onPress: () => console.log('Cancel Pressed'),
				style: 'cancel',
			},
			{
				text: t('generic.genericScoreboardsDefault.resetAlertReset'), onPress: () => {
					counterBlue.current?.resetWins(),
						counterGreen.current?.resetWins(),
						counterRed.current?.resetWins(),
						counterYellow.current?.resetWins()
				}
			},
		]);

	const ResetWins = () => {
		return <>
			<TouchableOpacity onPress={resetWinsOnPress} style={styleReset.resetButton}>
				<Text style={styleReset.resetText}>{t('generic.genericScoreboardsDefault.resetWins')}</Text>
			</TouchableOpacity>
		</>
	};

	return <>
		<View style={styleViews.blue}>
			<FourPlayersNameInput choosedName={t('generic.genericFourPlayers.blue')} />
			<FourPlayerCounter ref={counterBlue} />
		</View>

		<View style={styleViews.green}>
			<FourPlayersNameInput choosedName={t('generic.genericFourPlayers.green')} />
			<FourPlayerCounter ref={counterGreen} />
		</View>

		<View style={styleViews.red}>
			<FourPlayersNameInput choosedName={t('generic.genericFourPlayers.red')} />
			<FourPlayerCounter ref={counterRed} />
		</View>

		<View style={styleViews.yellow}>
			<FourPlayersNameInput choosedName={t('generic.genericFourPlayers.yellow')} />
			<FourPlayerCounter ref={counterYellow} />
		</View>

		<ResetWins />
		<Details />
	</>
};