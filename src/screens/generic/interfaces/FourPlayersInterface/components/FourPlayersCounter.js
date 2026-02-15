import { Component } from "react";
import { Text, TouchableOpacity, Image} from "react-native";

import firstCrown from '../images/firstCrown.png';
import secondCrown from '../images/secondCrown.png';
import thirdCrown from '../images/thirdCrown.png';

import { styleCounter } from "../styles/styleCounter";

export default class FourPlayerCounter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			points: [0, 0, 0],
		};
	};

	buttonOnPress = (position) => {
		const newPoints = [...this.state.points];
		newPoints[position] += 1;
		this.setState({ points: newPoints });
	};

	buttonOnLongPress = (position) => {
		const newPoints = [...this.state.points];
		if ((newPoints[position] - 1) >= 0) {
			newPoints[position] -= 1;
		}
		this.setState({ points: newPoints });
	};

	resetWins = () => {
		this.setState({ points: [0, 0, 0] });
	};

	CrownButton = ({ crownIndex, buttonStyle, numberStyle, scale, image }) => {
		return <>
			<TouchableOpacity
				style={buttonStyle}
				onPress={() => this.buttonOnPress(crownIndex)}
				delayLongPress={300}
				onLongPress={() => this.buttonOnLongPress(crownIndex)}
			>
				<Image
					source={image}
					style={{ transform: [{ scale: scale }]}}
				/>
				<Text style={numberStyle}>{this.state.points[crownIndex]}</Text>
			</TouchableOpacity>
		</>
	};

	render() {
		return <>
			<this.CrownButton
				crownIndex={0}
				buttonStyle={styleCounter.firstButton}
				numberStyle={styleCounter.points}
				scale={0.6}
				image={firstCrown}
			/>

			<this.CrownButton
				crownIndex={1}
				buttonStyle={styleCounter.secondButton}
				numberStyle={styleCounter.points2r}
				scale={0.4}
				image={secondCrown}
			/>

			<this.CrownButton
				crownIndex={2}
				buttonStyle={styleCounter.thirdButton}
				numberStyle={styleCounter.points3r}
				scale={0.4}
				image={thirdCrown}
			/>
		</>
	};
};

