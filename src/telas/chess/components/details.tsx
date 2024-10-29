import React from "react";
import { Image, View } from "react-native";

import Title from "../images/title.png"

export default function Details(){
    return <>
        <Image
        source={Title}
        style={{position: "absolute",transform:[{scale: 0.5}]}}
        />

    <View style= {{
        borderBottomWidth: 4,
        borderBottomColor: 'white',
        position: "absolute",
        alignSelf: 'center',
        top: '47.5%',
        width: '100%',
        }}
    />
    </>
}