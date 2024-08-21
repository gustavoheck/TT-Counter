import React from "react";
import { SafeAreaView, Text, ImageBackground, KeyboardAvoidingView, View } from "react-native";
import Interface from "./componentes/interface";
import Details from "./componentes/details";
import Names from "./componentes/names";

import WhiteReturn from "../../globalComponents/whiteReturn";

import background from "./images/background.jpg";

export default function Truco (){
    return <>
  <View style={{flex: 1}}>
     <ImageBackground
     source={background}
     style={{width: '100%', height: '100%',}}
     resizeMode='cover'
     >
        <Names/>
        <Interface/>
        <Details/>
        <WhiteReturn/>
     </ImageBackground>
   </View>
    </>
};
