import React from "react";
import { Image } from "react-native";

import Title from "./images/title.png";

export default function Details() {
	return <>
		<Image
			source={Title}
			style={{ position: "absolute", transform: [{ scale: 0.5 }], bottom: '91%' }}
		/>
	</>
};