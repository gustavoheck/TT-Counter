import React, {useState} from "react";
import { Text, TouchableOpacity, Image, View, ImageBackground} from "react-native";
import { DDezStyles } from "../styles/DDezStyles";

import D10 from '../images/D10.png'

export default function DDez (){
  const [number, setNumber] = useState(1);

  const rollDice = () => {
    const randomNumber = Math.floor(1 + Math.random() * 10);
    setNumber(randomNumber);
  };

return  <>
  <TouchableOpacity onPress={rollDice} style={DDezStyles.button}>
  <Image
  source={D10}
  style={DDezStyles.image}
  resizeMode="cover"
  />
  <Text style={DDezStyles.Number}>{number}</Text>
  </TouchableOpacity>
</>
};