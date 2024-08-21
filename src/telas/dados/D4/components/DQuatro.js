import React, {useState} from "react";
import { Text, TouchableOpacity, Image, View, ImageBackground} from "react-native";
import { DQuatroStyles } from "../styles/DQuatroStyles";

import D4 from '../images/D4.png'

export default function DQuatro (){
  const [number, setNumber] = useState(1);

  const rollDice = () => {
    const randomNumber = Math.floor(1 + Math.random() * 4);
    setNumber(randomNumber);
  };

return  <>
  <TouchableOpacity onPress={rollDice} style={DQuatroStyles.button}>
  <Image
  source={D4}
  style={DQuatroStyles.image}
  resizeMode="cover"
  />
  <Text style={DQuatroStyles.Number}>{number}</Text>
  </TouchableOpacity>
</>
};