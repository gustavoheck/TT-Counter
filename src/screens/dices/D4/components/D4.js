import { D4Styles } from "../styles/D4Styles";

import D4Image from '../images/D4Image.png';
import DiceButton from "../../generalComponents/DiceButton";
import { DiceButtonStyles } from "../../generalComponents/DiceButtonStyles";

export default function DQuatro() {
	return <>
		<DiceButton
			minNumber={1}
			maxNumber={4}
			diceImage={D4Image}
			diceNumber={D4Styles.diceNumber}
			placeholder={"D4"}
		/>
	</>
};