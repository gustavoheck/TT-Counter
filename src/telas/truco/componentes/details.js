import React from "react";
import { View, Image } from "react-native";

import { styleDetails } from "../styles/styleDetails";

import title from "../images/trucoTitle.png";

export default function Details() {
	return <>

		<Image
			source={title}
			style={styleDetails.Title}
		/>

		<View style={styleDetails.midVerticalLine} />

		<View
			style={{
				borderWidth: 1,
				borderColor: 'white',
				top: '60%'
			}}
		/>
		<View
			style={{
				borderWidth: 1,
				borderColor: 'white',
				top: '4.5%'
			}}
		/>
	</>
};