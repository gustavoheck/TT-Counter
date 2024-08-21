import React, {useState} from "react";
import { Text, TouchableOpacity, Image,} from "react-native";
import { DDozeStyles } from "../styles/DDozeStyles";

import D12 from '../images/D12.png'

export default function DDoze (){
    const [number, setNumber] = useState(1);

    const rollDice = () => {
      const randomNumber = Math.floor(1 + Math.random() * 12);
      setNumber(randomNumber);
    };
  
return  <>
    <TouchableOpacity onPress={rollDice} style={DDozeStyles.button}>
      <Image
      source={D12}
      style={DDozeStyles.image}
      resizeMode="cover"
      />
      <Text style={DDozeStyles.Number}>{number}</Text>
    </TouchableOpacity>
</>
};