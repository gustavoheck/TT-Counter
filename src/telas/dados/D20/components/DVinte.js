import React, {useState} from "react";
import { Text, TouchableOpacity, Image} from "react-native";
import { DVinteStyles } from "../styles/DVinteStyles";

import D20 from '../images/D20.png'

export default function DVinte (){
    const [number, setNumber] = useState(1);

    const rollDice = () => {
      const randomNumber = Math.floor(1 + Math.random() * 20);
      setNumber(randomNumber);
    };
  
return  <>
    <TouchableOpacity onPress={rollDice} style={DVinteStyles.button}>
      <Image
        source={D20}
        style={DVinteStyles.image}
        resizeMode="cover"
      />
      <Text style={DVinteStyles.Number}>{number}</Text>
    </TouchableOpacity>
</>
};