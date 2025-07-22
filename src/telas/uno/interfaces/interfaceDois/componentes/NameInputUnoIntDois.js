import React, { useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";

import { stylesViews } from "../styles/styleViews";

export default function NameInputUnoIntDois({choosedName}) {

  const [name, setName] = useState()

  if (choosedName == undefined || choosedName == null) {
    choosedName = 'nome';
  }
  return <>
      <TextInput
        onChangeText={(inputValue) => setName(inputValue)}
        keyboardType="default"
        defaultValue={choosedName}
        color="black"
        style={styles.text}
        textAlign="center"
        underlineColorAndroid="transparent"
        maxLength={7}
      />
  </>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    position: 'absolute',
    top: '5.5%',
    alignSelf: 'center',
    width: '100%',
    color: 'white',
    fontFamily: '04B_30__',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 5, height: 1},
        textShadowRadius: 10,
  },
});