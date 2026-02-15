import { D8Styles } from "../styles/D8Styles";

import D8Image from '../images/D8Image.png';
import DiceButton from "../../generalComponents/DiceButton";

export default function D8() {
	return <>
		<DiceButton
			minNumber={1}
			maxNumber={8}
			diceImage={D8Image}
			diceStyle={D8Styles.button}
			numberStyle={D8Styles.number}
		/>
	</>
};