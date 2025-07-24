import React, { useState } from "react";
import { TextInput } from "react-native";

export default function ChessNameInput({choosedName, styleName}) {

  const [name, setName] = useState()

  return <>
    <TextInput
      onChangeText={(inputValue) => setName(inputValue)}
      keyboardType="default"
      defaultValue={choosedName}
      style={styleName}
      underlineColorAndroid="transparent"
      textAlign="left"
      allowFontScaling={true}
      maxLength={12}
    />
  </>
};   