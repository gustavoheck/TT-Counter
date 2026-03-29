import { useRef } from "react";
import { Text, View, } from "react-native";
//Styles
import { styleViews } from "./styles/styleViews";
import { styleDetails } from "./styles/styleDetails";
//Components
import Return from "../../globalComponents/ReturnButton";
import TrucoNameInput from "./components/TrucoNameInput";
import CounterTruco from "./components/TrucoCounter";
import Details from "./components/Details";
import ResetButton from "./components/ResetButton";

export default function Truco() {
	const LeftSideCounterRef = useRef(null);
	const RightSideCounterRef = useRef(null);

	const resetAllPoints = () => {
		LeftSideCounterRef.current?.resetPoints();
		RightSideCounterRef.current?.resetPoints();
	};

	return <>
		<View style={{ flex: 1, backgroundColor: "#004500" }}>
			<View style={styleViews.leftTopSquare}>
				<TrucoNameInput choosedName={"Nos"} />
				<CounterTruco ref={LeftSideCounterRef} duckGender="F" reset={() => {resetAllPoints()}}/>
			</View>
			<View style={styleViews.leftBottomSquare}>
				<Text style={styleDetails.winsText}>Wins</Text>
				<ResetButton
					buttonTitle={"Reset Wins"}
					alertTitle={"Reset Wins"}
					cancelButtonText={"Cancel"}
					confirmButtonText={"Reset"}
					confirmButtonMessage={"Do you really want to reset the the wins scoreboard?"}
					onConfirm={() => {
						LeftSideCounterRef.current?.resetWins();
						RightSideCounterRef.current?.resetWins();
					}}
				/>
			</View>

			<View style={styleViews.rightTopSquare}>
				<TrucoNameInput choosedName={"Eles"} />
				<CounterTruco ref={RightSideCounterRef} duckGender="M" reset={() => {resetAllPoints()}}/>
			</View>
			<View style={styleViews.rightBottomSquare}>
				<Text style={styleDetails.winsText}>Wins</Text>
				<ResetButton
					buttonTitle={"Reset Points"}
					alertTitle={"Reset Points"}
					cancelButtonText={"Cancel"}
					confirmButtonText={"Reset"}
					confirmButtonMessage={"Do you really want to reset the the points scoreboard?"}
					onConfirm={() => {
						resetAllPoints();
					}}
				/>
			</View>

			<Details />
			<Return 
				color={"white"}
			/>
		</View>
	</>
};
