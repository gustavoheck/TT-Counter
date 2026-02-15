import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Lines from './details/Lines';
import IconsTwoPlayers from './details/IconsTwoPlayers';
import IconsFourPlayers from './details/IconsFourPlayers';

export default function GenericMenu () {

	const navigation = useNavigation()

	return <>
		<View style={{ flex: 1, flexDirection: 'row' }}>
			<TouchableOpacity
				onPress={() => navigation.navigate("TwoPlayersInterface")}
				style={{ flex: 1, backgroundColor: 'red', flexDirection: 'row' }}>
				<IconsTwoPlayers />
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => navigation.navigate("FourPlayersInterface")}
				style={{ flex: 1, backgroundColor: 'blue', flexDirection: 'row' }}>
				<IconsFourPlayers />
			</TouchableOpacity>
		</View>
		<Lines />
	</>
};
