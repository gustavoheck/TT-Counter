import React from "react";
import { Image } from "react-native";

import tabletop from './images/tabletop.png'

export default function Top (){
    return <>
        <Image
          source={tabletop}
          style={{alignSelf: 'center', position: 'absolute', height: '50%', width: '100%', bottom: '55%'}}
        />
    </>
}; 