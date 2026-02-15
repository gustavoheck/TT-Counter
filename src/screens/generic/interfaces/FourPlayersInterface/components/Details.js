import { View, Image } from "react-native";
import titleFourPlayers from '../images/titleFourPlayers.png';

export default function Details() {
	return <>
		<Image
			source={titleFourPlayers}
			style={{
				color: 'black',
				position: 'absolute',
				alignSelf: 'center',
				transform: [{ scale: 0.7 }],
				width: '60%',
				height: '5%'
			}} />

		<View style={{
			borderLeftWidth: 4,
			borderLeftColor: 'black',
			alignSelf: 'center',
			height: '90.5%',
			position: "absolute",
			bottom: '4%'
		}}
		/>

		<View style={{
			borderBottomWidth: 4,
			borderBottomColor: 'black',
			position: "absolute",
			alignSelf: 'center',
			top: '50%',
			width: '100%',
		}}
		/>
	</>
};