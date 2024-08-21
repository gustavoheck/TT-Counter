import React from "react";
import { Text, View, TouchableOpacity, Alert, StyleSheet, Button } from "react-native";
import { useState } from "react";

import { stylesOne } from "../styles/playerOne";
import { stylesTwo } from "../styles/playerTwo";
import { stylesViews } from "../styles/views";

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
<View style={stylesViews.topSideBackground}/>
<View style={stylesViews.bottomSideBackground}/>

  <View style={stylesViews.topLeftSide}>
    <Text style={stylesOne.Wins}>{OneWins}</Text>

    <TouchableOpacity style={stylesOne.ButtonAdd} onPress={ () => setOneWins(OneWins +1)}><Text style={{fontSize: 60, color: 'black'}}>+</Text></TouchableOpacity>
    <TouchableOpacity style={stylesOne.ButtonMinus} onPress={ () => setOneWins(OneWins -1)}><Text style={{fontSize: 60, color: 'black'}}>-</Text></TouchableOpacity>
  </View>

  <View style={stylesViews.topRightSide}>
    <Text style={stylesTwo.Wins}>{TwoWins}</Text>

    <TouchableOpacity style={stylesTwo.ButtonAdd} onPress={ () => setTwoWins(TwoWins +1)}><Text style={{fontSize: 60, color: 'black',}}>+</Text></TouchableOpacity>
    <TouchableOpacity style={stylesTwo.ButtonMinus} onPress={ () => setTwoWins(TwoWins -1)}><Text style={{fontSize: 60, color: 'black',}}>-</Text></TouchableOpacity>

  </View>

  <View style={stylesViews.bottomRightSide}>
    <Text style={stylesTwo.Loses}>{TwoLoses}</Text>

    <TouchableOpacity style={stylesTwo.ButtonAdd} onPress={ () => setTwoLoses(TwoLoses +1)}><Text style={{fontSize: 60, color: 'black',}}>+</Text></TouchableOpacity>
    <TouchableOpacity style={stylesTwo.ButtonMinus} onPress={ () => setTwoLoses(TwoLoses -1)}><Text style={{fontSize: 60, color: 'black',}}>-</Text></TouchableOpacity>
  </View>

  <View  style={stylesViews.bottomLeftSide}>
    <Text style={stylesOne.Loses}>{OneLoses}</Text>
    
    <TouchableOpacity style={stylesOne.ButtonAdd} onPress={ () => setOneLoses(OneLoses +1)}><Text style={{fontSize: 60, color: 'black'}}>+</Text></TouchableOpacity>
    <TouchableOpacity style={stylesOne.ButtonMinus} onPress={ () => setOneLoses(OneLoses -1)}><Text style={{fontSize: 60, color: 'black'}}>-</Text></TouchableOpacity>
  </View>

<TouchableOpacity onPress={resetWins} style={styles.button}><Text style={styles.text}>Reset Wins</Text></TouchableOpacity>
</>
};

const styles = StyleSheet.create ({
  text: {
    fontSize: 20,
    color: 'black'
  },
  button: {
    position:'absolute',
    top: '95%',
    left: '12.5%'
  }
});