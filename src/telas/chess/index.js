import React from "react";
import { ImageBackground, Text,Como, View } from "react-native";

import Return from "../../globalComponents/whiteReturn";
import background from './images/background.jpg'
import Countdown from "./components/interface";
import Details from "./components/details";
import Names from "./components/names";

export default function Chess(){
   return <>
   <View
    style={{flex: 1, backgroundColor: 'black'}}
   >
        <Return/>
        <Countdown/>
        <Names/>
        <Details/>
    </View>
    </>
}