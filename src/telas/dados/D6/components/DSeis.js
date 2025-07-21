import React, { useState } from 'react';
import { TouchableOpacity, Image} from 'react-native';
import { DSeisStyles } from '../styles/DSeisStyles';

import dadoUm from '../images/dado0.png';
import dadoDois from '../images/dado1.png';
import dadoTres from '../images/dado2.png';
import dadoQuatro from '../images/dado3.png';
import dadoCinco from '../images/dado4.png';
import dadoSeis from '../images/dado5.png';

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
