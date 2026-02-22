import { View, Text} from "react-native";

import { styleDetails } from "../styles/styleDetails";

export default function Details() {
	return <>
		<Text style={styleDetails.title}>Generic</Text>

		<View style={styleDetails.topDivider} />

		<View style={styleDetails.middleDivider} />
	</>
};