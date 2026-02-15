import { D4Styles } from "../styles/D4Styles";

import D4Image from '../images/D4Image.png';
import DiceButton from "../../generalComponents/DiceButton";

export default function DQuatro() {
	return <>
		<DiceButton
			minNumber={1}
			maxNumber={4}
			diceImage={D4Image}
			diceStyle={D4Styles.button}
			numberStyle={D4Styles.number}
		/>
	</>
};