import React, {useState} from "react";
import {TextInput, StyleSheet, View} from "react-native";

import { stylesViews } from "../styles/views";

export default function Names (){
    const [Blue, setBlue] = useState('Blue')
    const [Green, setGreen] = useState('Green')
    const [Red, setRed] = useState('Red')
    const [Yellow, setYellow] = useState('Yellow')
    return <>
    <View style={stylesViews.blue}>
      <TextInput
        onChangeText={(inputValue) => setBlue(inputValue)}
        keyboardType="default"
        defaultValue={Blue}
        color="black"
        style={styles.text}
        textAlign="center"

         />
    </View>
    <View style={stylesViews.green}>
      <TextInput
        onChangeText={(inputValue) => setGreen(inputValue)}
        keyboardType="default"
        defaultValue={Green}
        color="black"
        style={styles.text}
        textAlign="center"
        />
    </View>
    <View style={stylesViews.red}>        
      <TextInput
        onChangeText={(inputValue) => setRed(inputValue)}
        keyboardType="default"
        defaultValue={Red}
        color="black"
        style={styles.text}
        textAlign="center"
         />
    </View>
    <View style={stylesViews.yellow}>
      <TextInput
        onChangeText={(inputValue) => setYellow(inputValue)}
        keyboardType="default"
        defaultValue={Yellow}
        color="black"
        style={styles.text}
        textAlign="center"
         />
    </View>
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
    },
});