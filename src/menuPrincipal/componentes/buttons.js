import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import uno from '../images/uno.png';
import dado from '../images/dado.png';
import chess from '../images/chess.png';
import truco from '../images/truco.png';

import { styleMenu } from '../styles/styleMenu';

export default function Buttons() {
	const navigation = useNavigation();

	const BotaoMenu = ({ navegacao, estiloBotao, imagem }) => {
		return <>
			<TouchableOpacity onPress={() => navigation.navigate(navegacao)} style={estiloBotao}>
				<Image
					source={imagem}
					style={styleMenu.imagem}
				/>
			</TouchableOpacity>
		</>
	};

	return <>
		<BotaoMenu
			navegacao={"Dados"}
			estiloBotao={styleMenu.botaoDado}
			imagem={dado}
		/>
		<BotaoMenu
			navegacao={"Truco"}
			estiloBotao={styleMenu.botaoTruco}
			imagem={truco}
		/>
		<BotaoMenu
			navegacao={"Uno"}
			estiloBotao={styleMenu.botaoUno}
			imagem={uno}
		/>
		<BotaoMenu
			navegacao={"Chess"}
			estiloBotao={styleMenu.botaoXadrez}
			imagem={chess}
		/>
	</>
};
