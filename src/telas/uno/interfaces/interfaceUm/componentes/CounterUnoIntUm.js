import React, {Component} from "react";
import { Text, TouchableOpacity} from "react-native";

import { styleCounter } from "../styles/styleCounter";

export default class CounterUnoIntUm extends Component {
  constructor() {
    super();
    this.state = { 
      wins: 0,
    };
  }

  resetWins = () => {
    this.setState({wins: 0});
  }

  render() {
    return <>
        <Text style={styleCounter.winText}>Wins</Text>
        <Text style={styleCounter.wins}>{this.state.wins}</Text>

        <TouchableOpacity style={styleCounter.buttonAdd} onPress={() => this.setState({wins: this.state.wins + 1 })}>
          <Text style={styleCounter.buttonsText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styleCounter.buttonMinus} onPress={() => this.setState((this.state.wins > 0) ? {wins: this.state.wins - 1 } : {wins: 0})}>
          <Text style={styleCounter.buttonsText}>-</Text>
        </TouchableOpacity> 
    </>
  }
}
