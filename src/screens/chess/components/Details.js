import { View, Text } from "react-native";

import { styleDetails } from "../styles/styleDetails";

export default function Details() {
	return <>
		<Text style={styleDetails.title}>Chess</Text>

		<View style={styleDetails.horizontalDivider} />
	</>
};