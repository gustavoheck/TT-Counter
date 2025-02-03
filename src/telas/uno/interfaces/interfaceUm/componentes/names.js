import React, {useState} from "react";
import {TextInput, StyleSheet, View} from "react-native";

import { stylesViews } from "../styles/views";

export default function Names (){
    const [Name, setName] = useState('PlayerOne')
    const [Name2, setName2] = useState('PlayerTwo')
    return <>

    
      <TextInput
        onChangeText={(inputValue) => setName(inputValue)}
        keyboardType="default"
        defaultValue={Name}
        color="white"
        style={styles.name}
        underlineColorAndroid="transparent"
        textAlign="left"
        allowFontScaling={true}
         />
   

    
      <TextInput
        onChangeText={(inputValue) => setName2(inputValue)}
        keyboardType="default"
        defaultValue={Name2}
        color="white"
        style={styles.name2}
        underlineColorAndroid="transparent"
        textAlign="left"
         />
 
    </>
};

const styles = StyleSheet.create({
    name: {
        fontSize: 25,
        position: 'absolute',
        alignSelf: 'center',
        width: '100%',
        fontFamily: "04B_30__",
        top: '5%',
        right: '0%',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 5, height: 1},
        textShadowRadius: 10,
    },
    name2: {
      fontSize: 25,
      position: 'absolute',
      alignSelf: 'center',
      width: '100%',
      fontFamily: "04B_30__",
      top: '50%',
      right: '0%',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: 5, height: 1},
      textShadowRadius: 10,
  },
});