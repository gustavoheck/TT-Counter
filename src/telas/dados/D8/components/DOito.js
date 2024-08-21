import React, {useState} from "react";
import { Text, TouchableOpacity, Image, View, ImageBackground} from "react-native";
import { DOitoStyles } from "../styles/DOitoStyles";

import D8 from '../images/D8.png'

export default function DOito (){
  const [number, setNumber] = useState(1);

  const rollDice = () => {
    const randomNumber = Math.floor(1 + Math.random() * 8);
    setNumber(randomNumber);
  };

return  <>
  <TouchableOpacity onPress={rollDice} style={DOitoStyles.button}>
  <Image
  source={D8}
  style={DOitoStyles.image}
  resizeMode="cover"
  />
  <Text style={DOitoStyles.Number}>{number}</Text>
  </TouchableOpacity>
</>
};