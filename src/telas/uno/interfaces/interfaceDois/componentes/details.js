import React from "react";
import { View, Text, Image } from "react-native";
import unoTitle4x from '../images/unoTitle4x.png'

export default function Details (){
return <>
    <Image 
    source={unoTitle4x}
    style={{color: 'black',
    position: 'absolute',
    alignSelf: 'center',
    transform:[{scale: 0.4}],
    bottom: '91.75%'
    }}/>

    <View style= {{
        borderLeftWidth: 4,
        borderLeftColor: 'black',
        alignSelf: 'center',
        height: '90.5%',
        position: "absolute",
        bottom: '4%'
    }}
    />

    <View style= {{
        borderBottomWidth: 4,
        borderBottomColor: 'black',
        position: "absolute",
        alignSelf: 'center',
        top: '50%',
        width: '100%',
    }}
    />

</>
};