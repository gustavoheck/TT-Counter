import { TouchableOpacity, Image } from "react-native";
import Sound from "react-native-sound";

import femaleDuck from '../images/femaleDuck.png';
import maleDuck from '../images/maleDuck.png';
import { styleDucks } from "../styles/styleDucks";


export default function Ducks({ duckGender = 'M' }) {

	const playSound = (filename) => {
		const sound = new Sound(filename, Sound.MAIN_BUNDLE, () => {
			sound.play(() => {
				sound.release();
			});
		});
	};

	const DuckModel = ({ image, styleDuck, sound }) => {
		return <>
			<TouchableOpacity onPress={() => playSound(sound)} style={styleDuck}>
				<Image
					source={image}
				/>
			</TouchableOpacity>
		</>
	}

	if (duckGender == ("M" || "m")) {
		return <DuckModel image={maleDuck} styleDuck={styleDucks.duckM} sound={'quackm.mp3'}/>
	} else if (duckGender == ("F" || "f")) {
		return <DuckModel image={femaleDuck} styleDuck={styleDucks.duckF} sound={'quackf.mp3'}/>
	} else {
		return <>
			<DuckModel image={maleDuck} styleDuck={styleDucks.duckM} sound={'quackm.mp3'}/>
			{console.error("Genero do pato não selecionado ou foi definido um genero inválido")}
		</>
	}
};