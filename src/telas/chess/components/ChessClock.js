import React, { Component } from "react";
import { TouchableOpacity, Text, Image, Alert, View } from "react-native";
import { styleClock } from "../styles/styleClock";
import temporizador from "../images/temporizador.png";

export class ChessClock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			minutes: 10,
			seconds: 0,
			miliseconds: 0,
			disabled: false,
			clockTicking: undefined
		};
	};

	resetTimer = () => {
		this.setState({ minutes: 10 });
		this.setState({ seconds: 0 });
		this.setState({ miliseconds: 0 })
		clearInterval(this.state.clockTicking);
		this.setState({ disabled: false });
	};

	startTimer = () => {
		this.setState({
			clockTicking:
				setInterval(() => {
					this.changeTime()
				}, 10)
		});
		this.setState({ disabled: false });
	};

	changeTime = () => {
		this.setState((prevState) => {
			if (prevState.minutes == 0 && prevState.seconds == 0 && prevState.miliseconds == 0) {
				this.resetTimer();
				Alert.alert('Congratulations!', this.props.winMessage, [
					{
						text: 'OK',
						onPress: () => console.log('Cancel Pressed'),
						style: 'cancel',
					},
				]);
				return;
			};
			if (prevState.seconds == 0 && prevState.miliseconds == 0) {
				return {
					minutes: prevState.minutes - 1,
					seconds: 59,
					miliseconds: 99
				};
			};
			if (prevState.miliseconds == 0) {
				return {
					seconds: prevState.seconds - 1,
					miliseconds: 99
				};
			};
			return {
				miliseconds: prevState.miliseconds - 1
			};
		});
	};

	stopTimer = () => {
		clearInterval(this.state.clockTicking)
		this.setState({ disabled: true });
	};

	render() {
		return <>
			<TouchableOpacity onPress={() => { this.props.onPress() }} disabled={this.state.disabled} style={this.props.styleButton}>
				<Image
					source={temporizador}
					style={styleClock.image}
				/>
				<View style={styleClock.timerTextContainer}>
					<Text style={styleClock.timerText}>{this.state.minutes < 10 ? '0' + this.state.minutes : this.state.minutes}</Text>
					<Text style={styleClock.timerText}>:</Text>
					<Text style={styleClock.timerText}>{this.state.seconds < 10 ? '0' + this.state.seconds : this.state.seconds}</Text>
					<Text style={styleClock.timerText}>:</Text>
					<Text style={styleClock.timerText}>{this.state.miliseconds < 10 ? '0' + this.state.miliseconds : this.state.miliseconds}</Text>
				</View>
			</TouchableOpacity>
		</>
	};
};