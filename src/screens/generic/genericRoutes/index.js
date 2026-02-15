import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import GenericMenu from '../genericMenu';
import TwoPlayersInteface from '../interfaces/TwoPlayersInterface';
import FourPlayersInterface from '../interfaces/FourPlayersInterface';

export default function GenericRoutes() {
	return (
		<Stack.Navigator initialRouteName={GenericMenu} screenOptions={{ headerShown: false }}>
			<Stack.Screen name="GenericMenu" component={GenericMenu} />
			<Stack.Screen name="TwoPlayersInterface" component={TwoPlayersInteface} />
			<Stack.Screen name="FourPlayersInterface" component={FourPlayersInterface} />
		</Stack.Navigator>
	);
};