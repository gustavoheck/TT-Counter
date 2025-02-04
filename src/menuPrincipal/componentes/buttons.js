import React, { useState } from 'react';
import {Image, TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import uno from './images/uno.png'
import dado from './images/dado.png'
import chess from './images/chess.png'
import truco from './images/truco.png'


export default function Buttons(){
  const navigation = useNavigation()

  return <>


  <TouchableOpacity onPress={() => navigation.navigate("Dados")} style={{ bottom: '35%', position: 'absolute', height: '20%', width: '40%', left: '5%'}}>
    <Image
        source={dado}
        style={{ alignSelf: 'center', height: '100%', width: '100%', transform: [{ scale: 1},]}}
    />
  </TouchableOpacity>


  <TouchableOpacity onPress={() => navigation.navigate("Truco")} style={{ bottom: '35%', position: 'absolute', height: '20%', width: '40%', right: '5%'}}>
    <Image
        source={truco}
        style={{ alignSelf: 'center', height: '100%', width: '100%', transform: [{ scale: 1},]}}
    />
  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate("Uno")} style={{ bottom: '10%', position: 'absolute', height: '20%', width: '40%', left: '5%'}}>
    <Image
        source={uno}
        style={{ alignSelf: 'center', height: '100%', width: '100%', transform: [{ scale: 1},]}}
    />
  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate("Chess")} style={{ bottom: '10%', position: 'absolute', height: '20%', width: '40%', right: '5%'}}>
    <Image
        source={chess}
        style={{ alignSelf: 'center', height: '100%', width: '100%', transform: [{ scale: 1},]}}
    />
  </TouchableOpacity>
  </>
}
