import React, {Component} from "react";
import { Text, TouchableOpacity} from "react-native";

import { styleCounter } from "../styles/styleCounter";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = { 
      Wins: 0,
    };
  }

  resetWins = () => {
    this.setState({Wins: 0});
  }

  render() {
    return <>
        <Text style={styleCounter.winText}>Wins</Text>
        <Text style={styleCounter.wins}>{this.state.Wins}</Text>

        <TouchableOpacity style={styleCounter.buttonAdd} onPress={() => this.setState({Wins: this.state.Wins + 1 })}>
          <Text style={styleCounter.buttonsText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styleCounter.buttonMinus} onPress={() => this.setState((this.state.Wins > 0) ? {Wins: this.state.Wins - 1 } : {Wins: 0})}>
          <Text style={styleCounter.buttonsText}>-</Text>
        </TouchableOpacity> 
    </>
  }
}
