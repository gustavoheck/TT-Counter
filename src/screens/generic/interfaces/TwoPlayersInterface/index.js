import { useRef } from 'react';
import { Alert, TouchableOpacity, View, Text } from 'react-native';

import Details from './components/Details';
import TwoPlayersNameInput from './components/TwoPlayersNameInput';
import TwoPlayersInterface from './components/TwoPlayersInterface';

import { styleOthers } from './styles/styleOthers';
import { stylesViews } from './styles/styleViews';

export default function TwoPlayersInteface() {
	const topSideCounterRef = useRef(null);
	const bottomSideCounterRef = useRef(null);

	const resetWinsOnPress = () =>
		Alert.alert('Reset', 'Você realmente deseja resetar o placar?', [
			{
				text: 'Cancel',
				onPress: () => console.log('Cancel Pressed'),
				style: 'cancel',
			},
			{
				text: 'Reset', onPress: () => {
					topSideCounterRef.current?.resetWins();
					bottomSideCounterRef.current?.resetWins();
				}
			},
		]);

	const ResetWins = () => {
		return <>
			<TouchableOpacity onPress={resetWinsOnPress} style={styleOthers.resetButton}><Text style={styleOthers.resetText}>Reset Wins</Text></TouchableOpacity>
		</>
	};

	return <>
		<View style={stylesViews.topSide}>
			<TwoPlayersNameInput playerName={"PlayerUm"} />
			<TwoPlayersInterface ref={topSideCounterRef} />
		</View>

		<View style={stylesViews.bottomSide}>
			<TwoPlayersNameInput playerName={"PlayerDois"} styleText={styleOthers.name} />
			<TwoPlayersInterface ref={bottomSideCounterRef} />
			<ResetWins />
		</View>
		<Details />
	</>
};