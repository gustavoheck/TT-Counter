import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import generic from '../images/generic.png';
import dices from '../images/dices.png';
import chess from '../images/chess.png';
import truco from '../images/truco.png';

import { styleMenu } from '../styles/styleMenu';

export default function Buttons() {
	const navigation = useNavigation();

	const MenuButton = ({ buttonNavigation, buttonStyle, image}) => {
		return <>
			<TouchableOpacity onPress={() => navigation.navigate(buttonNavigation)} style={buttonStyle}>
				<Image
					source={image}
					style={styleMenu.image}
				/>
			</TouchableOpacity>
		</>
	};

	return <>
		<MenuButton
			buttonNavigation={"Dices"}
			buttonStyle={styleMenu.diceButton}
			image={dices}
		/>
		<MenuButton
			buttonNavigation={"Truco"}
			buttonStyle={styleMenu.trucoButton}
			image={truco}
		/>
		<MenuButton
			buttonNavigation={"Generic"}
			buttonStyle={styleMenu.genericButton}
			image={generic}
		/>
		<MenuButton
			buttonNavigation={"Chess"}
			buttonStyle={styleMenu.chessButton}
			image={chess}
		/>
	</>
};
