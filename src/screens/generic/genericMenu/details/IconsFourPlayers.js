import { Image} from "react-native";

import playerIcon from '../images/playerIcon.png'

export default function IconsFourPlayers() {

	return <>
		<Image
			source={playerIcon}
			style={{ position: 'absolute', width: '50%', height: '15%', alignSelf: 'center', bottom: '35%', transform: [{ scale: 1.1 }] }}
		/>
		<Image
			source={playerIcon}
			style={{ position: 'absolute', width: '50%', height: '15%', right: '0%', alignSelf: 'center', bottom: '35%', transform: [{ scale: 1.1 }] }}
		/>
		<Image
			source={playerIcon}
			style={{ position: 'absolute', width: '50%', height: '15%', alignSelf: 'center', top: '35%', transform: [{ scale: 1.1 }] }}
		/>
		<Image
			source={playerIcon}
			style={{ position: 'absolute', width: '50%', height: '15%', right: '0%', alignSelf: 'center', top: '35%', transform: [{ scale: 1.1 }] }}
		/>
	</>
};