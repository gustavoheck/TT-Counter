import React from "react";
import { View, Image } from "react-native";

import { styleOthers } from "../styles/styleOthers";

import unoTitle from '../images/unoTitle.png'

export default function Details (){
return <>
    <Image
      style={styleOthers.Title}
      source={unoTitle}
    />

    <View style= {{
        borderBottomWidth: 4,
        borderBottomColor: 'white',
        position: "absolute",
        alignSelf: 'center',
        top: '4.5%',
        width: '100%',
    }}
    />
    <View style= {{
        borderBottomWidth: 4,
        borderBottomColor: 'white',
        position: "absolute",
        alignSelf: 'center',
        top: '49.7%',
        width: '100%',
    }}
    />

</>
};