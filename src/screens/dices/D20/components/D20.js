import D20Image from '../images/D20Image.png';
import DiceButton from "../../generalComponents/DiceButton";

export default function D20() {
	return <>
		<DiceButton
			minNumber={1}
			maxNumber={20}
			diceImage={D20Image}
			placeholder={"D20"}
		/>
	</>
};