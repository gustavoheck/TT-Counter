import React from "react";
import { Image } from "react-native";

import player from '../images/player.png'

export default function ImagesPlay1 (){
    return <>
        <Image
          source={player}
          style={{position: 'absolute', width: '50%', height: '15%', alignSelf: 'center', transform: [{ scale: 1.2}]}}
        />
        <Image
          source={player}
          style={{position: 'absolute', width: '50%', height: '15%',right: '0%', alignSelf: 'center', transform: [{ scale: 1.2}]}}
        />
    </>
};