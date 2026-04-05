import { useRef } from 'react';
import { Alert, TouchableOpacity, View, Text } from 'react-native';

import Details from './components/Details';
import TwoPlayersNameInput from './components/TwoPlayersNameInput';
import TwoPlayersInterface from './components/TwoPlayersInterface';

import { styleOthers } from './styles/styleOthers';
import { stylesViews } from './styles/styleViews';
import { styleCounter } from './styles/styleCounter';
import { useTranslation } from 'react-i18next';

export default function TwoPlayersInteface() {
	const topSideCounterRef = useRef(null);
	const bottomSideCounterRef = useRef(null);
	const { t } = useTranslation();

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
					topSideCounterRef.current?.resetWins();
					bottomSideCounterRef.current?.resetWins();
				}
			},
		]);

	const ResetWins = () => {
		return <>
			<TouchableOpacity onPress={resetWinsOnPress} style={styleOthers.resetButton}>
				<Text style={styleOthers.resetText}>{t('generic.genericScoreboardsDefault.resetWins')}</Text>
			</TouchableOpacity>
		</>
	};

	return <>
		<View style={stylesViews.topSide}>
			<TwoPlayersNameInput playerName={t('screensDefault.playerOneNameInput')} />
			<Text style={styleCounter.winText}>{t('screensDefault.wins')}</Text>
			<TwoPlayersInterface ref={topSideCounterRef} />
		</View>

		<View style={stylesViews.bottomSide}>
			<TwoPlayersNameInput playerName={t('screensDefault.playerTwoNameInput')} styleText={styleOthers.name} />
			<Text style={styleCounter.winText}>{t('screensDefault.wins')}</Text>
			<TwoPlayersInterface ref={bottomSideCounterRef} />
			<ResetWins />
		</View>
		<Details />
	</>
};