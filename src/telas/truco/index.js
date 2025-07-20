import React from "react";
import { SafeAreaView, Text, ImageBackground, KeyboardAvoidingView, View } from "react-native";
import Interface from "./componentes/interface";
import Details from "./componentes/details";
import Names from "./componentes/names";

import WhiteReturn from "../../globalComponents/whiteReturn";

export default function Truco (){
    return <>
  <View style={{flex: 1, backgroundColor: "#004500"}}>
        <Names/>
        <Interface/>
        <Details/>
        <WhiteReturn/>
   </View>
    </>
};
