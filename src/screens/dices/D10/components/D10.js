import { D10Styles } from "../styles/D10Styles";

import D10Image from '../images/D10Image.png';
import DiceButton from "../../generalComponents/DiceButton";
import { DiceButtonStyles } from "../../generalComponents/DiceButtonStyles";

export default function D10() {
	return <>
		<DiceButton
			minNumber={1}
			maxNumber={10}
			diceImage={D10Image}
			placeholder={"D10"}
		/>
	</>
};