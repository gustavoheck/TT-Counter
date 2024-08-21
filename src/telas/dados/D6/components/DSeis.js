import React, { useState } from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import { DSeisStyles } from '../styles/DSeisStyles';

import dadoUm from '../images/dadoUm.png';
import dadoDois from '../images/dadoDois.png';
import dadoTres from '../images/dadoTres.png';
import dadoQuatro from '../images/dadoQuatro.png';
import dadoCinco from '../images/dadoCinco.png';
import dadoSeis from '../images/dadoSeis.png';

const diceImages = {
  1: dadoUm,
  2: dadoDois,
  3: dadoTres,
  4: dadoQuatro,
  5: dadoCinco,
  6: dadoSeis,
};

export default function DSeis() {
  const [number, setNumber] = useState(1);

  const rollDice = () => {
    const randomNumber = Math.floor(1 + Math.random() * 6);
    setNumber(randomNumber);
  };

  return (
    <>
      <TouchableOpacity onPress={rollDice} style={DSeisStyles.button}>
      <Image
        source={diceImages[number]}
        style={DSeisStyles.image}
        resizeMode='cover'
      />
      </TouchableOpacity>
    </>
  );
}
