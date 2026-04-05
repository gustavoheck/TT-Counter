import { D12Styles } from "../styles/D12Styles";

import D12Image from '../images/D12Image.png';
import DiceButton from "../../generalComponents/DiceButton";
import { DiceButtonStyles } from "../../generalComponents/DiceButtonStyles";

export default function D12() {
	return <>
		<DiceButton
			minNumber={1}
			maxNumber={12}
			diceImage={D12Image}
			placeholder={"D12"}
		/>
	</>
};