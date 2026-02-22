import { Image } from "react-native";

import Title from "./images/title.png";

import { styleDetails } from "./styles/styleDetails";

export default function Details() {
	return <>
		<Image
			source={Title}
			style={styleDetails.title}
		/>
	</>
};