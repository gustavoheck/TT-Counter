import { View, Text } from "react-native";

import { styleDetails } from "../styles/styleDetails";

export default function Details() {
	return <>

		<Text style={styleDetails.title}>Truco</Text>

		<View style={styleDetails.midVerticalLine} />

		<View style={styleDetails.winsHorizontalLine} />

		<View style={styleDetails.titleHorizontalLine} />
	</>
};