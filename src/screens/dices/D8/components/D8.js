import D8Image from '../images/D8Image.png';
import DiceButton from "../../generalComponents/DiceButton";

export default function D8() {
	return <>
		<DiceButton
			minNumber={1}
			maxNumber={8}
			diceImage={D8Image}
			placeholder={"D8"}
		/>
	</>
};