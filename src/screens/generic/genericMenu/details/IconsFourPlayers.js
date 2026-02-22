import { Image} from "react-native";

import playerIcon from '../images/playerIcon.png'
import { styleIconsFour } from "../styles/styleIconsFour";

export default function IconsFourPlayers() {

	return <>
		<Image source={playerIcon} style={styleIconsFour.imageOne} />
		<Image source={playerIcon} style={styleIconsFour.imageTwo} />
		<Image source={playerIcon} style={styleIconsFour.imageThree} />
		<Image source={playerIcon} style={styleIconsFour.imageFour} />
	</>
};