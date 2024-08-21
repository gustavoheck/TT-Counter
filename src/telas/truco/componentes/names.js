import React, {useState} from "react";
import {TextInput, View, StyleSheet,TouchableOpacity, Image} from "react-native";

import { stylesView } from "../styles/view";

export default function Names (){
    const [Name, setName] = useState('Nós')
    const [Name2, setName2] = useState('Eles')

    return <>
      <TextInput
        onChangeText={(inputValue) => setName(inputValue)}
        keyboardType="default"
        defaultValue={Name}
        color="#ffff"
        style={styles.Nos}
        underlineColorAndroid="transparent"
        textAlign="center"
        allowFontScaling={true}
        numberOfLines={1}
         />
    <View style={stylesView.elesSquare}>
      <TextInput
        onChangeText={(inputValue) => setName2(inputValue)}
        keyboardType="default"
        defaultValue={Name2}
        color="#ffff"
        style={styles.Eles}
        underlineColorAndroid="transparent"
        textAlign="center"
        allowFontScaling={true}
        numberOfLines={1}
         />
    </View>

    
    </>
};

const styles = StyleSheet.create({
  Eles: {
      position: "absolute",
      left: '0%',
      fontSize: 30,
      fontFamily: 'Carter One Regular',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: 8, height: 1},
      textShadowRadius: 10,
      top: '0%',
      width: '100%',
      borderWidth: 1,


  },
  Nos: {
      position: "absolute",
      fontFamily: 'Carter One Regular',
      fontSize: 30,
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: 8, height: 1},
      textShadowRadius: 10,
      top: '5%',
      width: '50%',
      borderWidth: 1
  },
});