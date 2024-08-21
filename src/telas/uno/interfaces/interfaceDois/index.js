import React from "react";
import { View } from "react-native";

import FourPlayers from "./componentes/fourPlayers";
import Details from "./componentes/details";
import Names from "./componentes/names";

import Return from "../../../../globalComponents/return";

export default function InterfaceDois (){
    return <>
        <View style= {{flex: 1}}>
            <FourPlayers/>
            <Details/>
            <Names/>
            <Return/>
        </View>
    </>
};