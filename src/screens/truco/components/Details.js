import { View, Image } from "react-native";

import { styleDetails } from "../styles/styleDetails";

import title from "../images/trucoTitle.png";

export default function Details() {
	return <>

		<Image
			source={title}
			style={styleDetails.title}
		/>

		<View style={styleDetails.midVerticalLine} />

		<View style={styleDetails.winsHorizontalLine} />
		
		<View style={styleDetails.titleHorizontalLine} />
	</>
};