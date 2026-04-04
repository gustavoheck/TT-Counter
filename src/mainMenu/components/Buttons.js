import { Image, TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import generic from '../images/generic.png';
import dices from '../images/dices.png';
import chess from '../images/chess.png';
import truco from '../images/truco.png';

import { styleMenu } from '../styles/styleMenu';

export default function Buttons() {
	const navigation = useNavigation();
	const { t } = useTranslation();

	const MenuButton = ({ buttonNavigation, buttonStyle, image, placeholder }) => {
		return <>
			<TouchableOpacity onPress={() => navigation.navigate(buttonNavigation)} style={buttonStyle}>
				<Image
					source={image}
					style={styleMenu.image}
				/>
				<Text style={styleMenu.placeholder}>{placeholder}</Text>
			</TouchableOpacity>
		</>
	};

	return <>
		<View style={styleMenu.buttonsContainer}>
			<MenuButton
				buttonNavigation={"Dices"}
				buttonStyle={styleMenu.menuButton}
				image={dices}
				placeholder={t('mainMenu.dicesPlaceholder')}
			/>
			<MenuButton
				buttonNavigation={"Truco"}
				buttonStyle={styleMenu.menuButton}
				image={truco}
				placeholder={t('mainMenu.trucoPlaceholder')}
			/>
			<MenuButton
				buttonNavigation={"Generic"}
				buttonStyle={styleMenu.menuButton}
				image={generic}
				placeholder={t('mainMenu.genericPlaceholder')}
			/>
			<MenuButton
				buttonNavigation={"Chess"}
				buttonStyle={styleMenu.menuButton}
				image={chess}
				placeholder={t('mainMenu.chessPlaceholder')}
			/>
		</View>
	</>
};
