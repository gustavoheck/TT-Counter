import React from "react";
import { View, Text } from "react-native";

export default function Details (){
return <>
    <Text style={{color: 'black',
    fontSize: 40,
    position: 'absolute',
    alignSelf: 'center'
    }}>Uno</Text>

    <View style= {{
        borderLeftWidth: 4,
        borderLeftColor: 'black',
        alignSelf: 'center',
        height: '92.5%',
        position: "absolute",
        bottom: '0%'
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