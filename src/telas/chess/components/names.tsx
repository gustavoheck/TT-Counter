import React from "react";
import { Text } from "react-native";

import {Styles} from "../styles/names"

export default function Names () {
    return <>
        <Text style={Styles.Name1}>Player 1</Text>
        <Text style={Styles.Name2}>Player 2</Text>
    </>
}   