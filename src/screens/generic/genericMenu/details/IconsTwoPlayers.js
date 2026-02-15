import { Image } from "react-native";

import playerIcon from '../images/playerIcon.png';

export default function IconsTwoPlayers() {
	return <>
		<Image
			source={playerIcon}
			style={{ position: 'absolute', width: '50%', height: '15%', alignSelf: 'center', transform: [{ scale: 1.2 }] }}
		/>
		<Image
			source={playerIcon}
			style={{ position: 'absolute', width: '50%', height: '15%', right: '0%', alignSelf: 'center', transform: [{ scale: 1.2 }] }}
		/>
	</>
};