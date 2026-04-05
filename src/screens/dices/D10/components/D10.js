import D10Image from '../images/D10Image.png';
import DiceButton from "../../generalComponents/DiceButton";

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