import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";


export default function NameInputTruco({choosedName}) {
  const [name, setName] = useState()

  if (choosedName == undefined) {
    console.error("É necessário definir um nome de jogador");
  }

  return <>
    <TextInput
      onChangeText={(inputValue) => setName(inputValue)}
      keyboardType="default"
      defaultValue={choosedName}
      color="#ffff"
      style={styles.nameStyle}
      underlineColorAndroid="transparent"
      textAlign="center"
      allowFontScaling={true}
      maxLength={6}
    />
  </>
};

const styles = StyleSheet.create({
  nameStyle: {
    position: "absolute",
    alignSelf: "center",
    fontSize: 30,
    fontFamily: "04B_30__",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 8, height: 1 },
    textShadowRadius: 10,
    top: '0%',
    width: '100%',
  }
});