import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Buttons from './components/Buttons';
import { styleMenu } from './styles/styleMenu';
import tabletopMenuIcon from './images/tabletopMenuIcon.png';

export default function MainMenu() {
	const navigation = useNavigation();

	return <>
		<View style={{ flex: 1, backgroundColor: '#261408' }}>
			<Image
				style={styleMenu.menuImage}
				source={tabletopMenuIcon}
			/>
			<Buttons />
		</View>
	</>
};
