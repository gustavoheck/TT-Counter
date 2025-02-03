import React from "react";
import { Image } from "react-native";

import player from '../images/player.png'

export default function ImagesPlay2 (){
    return <>
        <Image
          source={player}
          style={{position: 'absolute', width: '50%', height: '15%', alignSelf: 'center', bottom: '35%', transform: [{ scale: 1.1}]}}
        />
        <Image
          source={player}
          style={{position: 'absolute', width: '50%', height: '15%',right: '0%', alignSelf: 'center', bottom: '35%', transform: [{ scale: 1.1}]}}
        />
        <Image
          source={player}
          style={{position: 'absolute', width: '50%', height: '15%', alignSelf: 'center', top: '35%', transform: [{ scale: 1.1}]}}
        />
        <Image
          source={player}
          style={{position: 'absolute', width: '50%', height: '15%',right: '0%', alignSelf: 'center', top: '35%', transform: [{ scale: 1.1}]}}
        />
    </>
};