import React, {useState} from "react";
import {TextInput, StyleSheet, View} from "react-native";

import { stylesViews } from "../styles/views";

export default function Names (){
    const [Name, setName] = useState('PlayerOne')
    const [Name2, setName2] = useState('PlayerTwo')
    return <>

    <View style={stylesViews.bottomLeftSide}>
      <TextInput
        onChangeText={(inputValue) => setName(inputValue)}
        keyboardType="default"
        defaultValue={Name}
        color="black"
        style={styles.name}
        underlineColorAndroid="transparent"
        textAlign="center"
        allowFontScaling={true}
         />
    </View>

    <View style={stylesViews.bottomRightSide}>
      <TextInput
        onChangeText={(inputValue) => setName2(inputValue)}
        keyboardType="default"
        defaultValue={Name2}
        color="black"
        style={styles.name}
        underlineColorAndroid="transparent"
        textAlign="center"
         />
    </View>
    </>
};

const styles = StyleSheet.create({
    name: {
        fontSize: 30,
        position: 'absolute',
        alignSelf: 'center',
        bottom: '92.5%',
        width: '100%',
    },
});