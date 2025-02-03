import React from "react";
import { Text, View, TouchableOpacity, Alert, StyleSheet, Button } from "react-native";
import { useState } from "react";

import { stylesOne } from "../styles/playerOne";
import { stylesTwo } from "../styles/playerTwo";
import { stylesViews } from "../styles/views";
import { styleOthers } from "../styles/styleOthers";

export default function SoloDuo(){
const [OneWins, setOneWins] = useState(0);
const [OneLoses, setOneLoses] = useState(0);

const [TwoWins, setTwoWins] = useState(0);
const [TwoLoses, setTwoLoses] = useState(0);

if (OneWins < 0) {
  setOneWins(0)
};
if (OneLoses < 0) {
  setOneLoses(0)
};
if (TwoWins < 0) {
  setTwoWins(0)
};
if (TwoLoses < 0) {
  setTwoLoses(0)
};

const resetWins = () =>
Alert.alert('Reset Wins', 'You really want to reset all the wins?', [
  {
    text: 'Cancel',
    onPress: () => console.log('Cancel Pressed'),
    style: 'cancel',
  },
  {text: 'Reset', onPress: () => {
    setTwoLoses(0), setTwoWins(0), setOneWins(0),setOneLoses(0)
}},
]);
return <>
  <View style={stylesViews.topSide}>


    <Text style={stylesOne.winText}>Wins</Text>
    <Text style={stylesOne.wins}>{OneWins}</Text>

    <TouchableOpacity style={stylesOne.buttonAdd} onPress={ () => setOneWins(OneWins +1)}><Text style={styleOthers.buttonsText}>+</Text></TouchableOpacity>
    <TouchableOpacity style={stylesOne.buttonMinus} onPress={ () => setOneWins(OneWins -1)}><Text style={styleOthers.buttonsText}>-</Text></TouchableOpacity>
  </View>

  <View style={stylesViews.bottomSide}>

    

    <Text style={stylesTwo.winText}>Wins</Text>
    <Text style={stylesTwo.wins}>{TwoWins}</Text>

    <TouchableOpacity style={stylesTwo.buttonAdd} onPress={ () => setTwoWins(TwoWins +1)}><Text style={styleOthers.buttonsText}>+</Text></TouchableOpacity>
    <TouchableOpacity style={stylesTwo.buttonMinus} onPress={ () => setTwoWins(TwoWins -1)}><Text style={styleOthers.buttonsText}>-</Text></TouchableOpacity>

  </View>
<TouchableOpacity onPress={resetWins} style={styleOthers.resetButton}><Text style={styleOthers.resetText}>Reset Wins</Text></TouchableOpacity>
</>
};
