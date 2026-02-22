import { Image } from "react-native";

import playerIcon from '../images/playerIcon.png';
import { styleIconsTwo } from "../styles/styleIconsTwo";

export default function IconsTwoPlayers() {
	return <>
		<Image source={playerIcon} style={styleIconsTwo.imageOne} />
		<Image source={playerIcon} style={styleIconsTwo.imageTwo} />
	</>
};