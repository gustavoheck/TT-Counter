import React, {useState} from "react";
import {TextInput} from "react-native";

import {Styles} from "../styles/names"

export default function Names () {

            const [Name, setName] = useState('Player One')
            const [Name2, setName2] = useState('Player Two')
            return <>
              <TextInput
                onChangeText={(inputValue) => setName(inputValue)}
                keyboardType="default"
                defaultValue={Name}
                style={Styles.Name1}
                underlineColorAndroid="transparent"
                textAlign="left"
                allowFontScaling={true}
                 />
            
              <TextInput
                onChangeText={(inputValue) => setName2(inputValue)}
                keyboardType="default"
                defaultValue={Name2}
                style={Styles.Name2}
                underlineColorAndroid="transparent"
                textAlign="left"
                 />
            </>
};   