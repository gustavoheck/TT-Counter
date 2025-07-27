import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Lines from './details/lines';
import ImagesPlay1 from './details/imagesPlay1';
import ImagesPlay2 from './details/imagesPlay2';

export default function MenuUno() {

	const navigation = useNavigation()

	return <>
		<View style={{ flex: 1, flexDirection: 'row' }}>
			<TouchableOpacity
				onPress={() => navigation.navigate("InterfaceUm")}
				style={{ flex: 1, backgroundColor: 'red', flexDirection: 'row' }}>
				<ImagesPlay1 />
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => navigation.navigate("InterfaceDois")}
				style={{ flex: 1, backgroundColor: 'blue', flexDirection: 'row' }}>
				<ImagesPlay2 />
			</TouchableOpacity>
		</View>
		<Lines />
	</>
};
