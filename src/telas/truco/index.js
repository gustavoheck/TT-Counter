import React, { useRef } from "react";
import { Text, View, } from "react-native";
//Styles
import { styleViews } from "./styles/styleViews";
import { styleDetails } from "./styles/styleDetails";
//Components
import Return from "../../globalComponents/return";
import NameInputTruco from "./componentes/NameInputTruco";
import CounterTruco from "./componentes/CounterTruco";
import Details from "./componentes/Details";
import ResetButton from "./componentes/ResetButton";

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
				<NameInputTruco choosedName={"Eles"} />
				<CounterTruco ref={LeftSideCounterRef} duckGender="F" reset={() => {resetAllPoints()}}/>
			</View>
			<View style={styleViews.leftBottomSquare}>
				<Text style={styleDetails.WinsText}>Wins</Text>
				<ResetButton
					buttonText={"Reset Wins"}
					confirmButtonText={"Reset"}
					cancelButtonText={"Cancel"}
					confirmButtonMessage={"Você realmente deseja resetar o placar?"}
					onConfirm={() => {
						LeftSideCounterRef.current?.resetWins();
						RightSideCounterRef.current?.resetWins();
					}}
				/>
			</View>

			<View style={styleViews.rightTopSquare}>
				<NameInputTruco choosedName={"Nos"} />
				<CounterTruco ref={RightSideCounterRef} duckGender="M" reset={() => {resetAllPoints()}}/>
			</View>
			<View style={styleViews.rightBottomSquare}>
				<Text style={styleDetails.WinsText}>Wins</Text>
				<ResetButton
					buttonText={"Reset Points"}
					confirmButtonText={"Reset"}
					cancelButtonText={"Cancel"}
					confirmButtonMessage={"Você realmente deseja resetar a pontuação?"}
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
