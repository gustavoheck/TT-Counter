import React from "react";
import { ImageBackground, Text,Como } from "react-native";

import Return from "../../globalComponents/whiteReturn";
import background from './images/background.jpg'
import Countdown from "./components/interface";
import Details from "./components/details";
import Names from "./components/names";

export default function Chess(){
   return <>
   <ImageBackground
    source={background}
    style={{flex: 1}}
    resizeMode='cover'
   >
        <Return/>
        <Countdown/>
        <Names/>
        <Details/>
    </ImageBackground>
    </>
}