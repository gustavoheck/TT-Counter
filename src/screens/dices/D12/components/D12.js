import D12Image from '../images/D12Image.png';
import DiceButton from "../../generalComponents/DiceButton";

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