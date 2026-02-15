import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BootSplash from "react-native-bootsplash";

import MainMenu from '../mainMenu';
import Truco from '../screens/truco';
import Chess from '../screens/chess';
import Generic from '../screens/generic';
import Dices from '../screens/dices';

const Stack = createNativeStackNavigator();

export default function Routes() {
	return (
		<NavigationContainer onReady={() => BootSplash.hide({ fade: true })}>
			<Stack.Navigator initialRouteName={MainMenu} screenOptions={{ headerShown: false }}>
				<Stack.Screen name="MainMenu" component={MainMenu} />
				<Stack.Screen name="Dices" component={Dices} />
				<Stack.Screen name="Truco" component={Truco} />
				<Stack.Screen name="Generic" component={Generic} />
				<Stack.Screen name="Chess" component={Chess} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};