import React from "react";
import { View, Text, Image } from "react-native";

import { stylesView } from "../styles/view";
import { stylesDetails } from "../styles/details";

import title from "../images/trucoTitle.png"

export default function Details (){
    return <>
    
  <View style={stylesDetails.midVerticalLine}/>

  <View
     style={{
        borderWidth: 1,
        borderColor: 'white',
        top: '60%'
      }}
    />
  <View
     style={{
        borderWidth: 1,
        borderColor: 'white',
        top: '4.5%'
      }}
    />

  <Image
    source={title}
    style={stylesDetails.Title}
  />

  <View style={stylesView.elesWinsSquare}>
    <Text style={stylesDetails.WinsText}>Wins</Text>
  </View>  

  <View style={stylesView.nosWinsSquare}>
    <Text style={stylesDetails.WinsText}>Wins</Text>
  </View>  

    </>
};