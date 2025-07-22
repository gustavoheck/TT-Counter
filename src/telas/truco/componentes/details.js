import React from "react";
import { View, Text, Image } from "react-native";

import { stylesView } from "../styles/styleViews";
import { styleDetails } from "../styles/styleDetails";

import title from "../images/trucoTitle.png"

export default function Details() {
  return <>

    <View style={styleDetails.midVerticalLine} />

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
      style={styleDetails.Title}
    />
  </>
};