import { View, Text } from "react-native";

import { styleLines } from "../styles/styleLines";

export default function Lines() {

	return <>
		<View style={styleLines.container}>
			<Text style={styleLines.title}>SELECT PLAYERS:</Text>
			<View style={styleLines.divider} />
		</View>
	</>
};