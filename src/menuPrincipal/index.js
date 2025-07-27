import React from 'react';
import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Buttons from './componentes/buttons';
import { styleMenu } from './styles/styleMenu';
import tabletop from './images/tabletop.png';

export default function MenuPrincipal() {
	const navigation = useNavigation();

	return <>
		<View style={{ flex: 1, backgroundColor: '#261408' }}>
			<Image
				style={styleMenu.imagemMenu}
				source={tabletop}
			/>
			<Buttons />
		</View>
	</>
};
