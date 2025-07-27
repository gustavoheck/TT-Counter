import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import InterfaceUm from '../interfaces/interfaceUm';
import InterfaceDois from '../interfaces/interfaceDois';
import MenuUno from '../menuUno';

export default function RotasUno() {
	return (
		<Stack.Navigator initialRouteName={MenuUno} screenOptions={{ headerShown: false }}>
			<Stack.Screen name="MenuUno" component={MenuUno} />
			<Stack.Screen name="InterfaceUm" component={InterfaceUm} />
			<Stack.Screen name="InterfaceDois" component={InterfaceDois} />
		</Stack.Navigator>
	);
};