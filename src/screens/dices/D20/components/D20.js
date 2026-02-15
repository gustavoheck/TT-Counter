import { D20Styles } from "../styles/D20Styles";

import D20Image from '../images/D20Image.png';
import DiceButton from "../../generalComponents/DiceButton";

export default function D20() {
	return <>
		<DiceButton
			minNumber={1}
			maxNumber={20}
			diceImage={D20Image}
			diceStyle={D20Styles.button}
		/>
	</>
};