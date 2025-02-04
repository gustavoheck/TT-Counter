import React, { useState } from "react";
import { View, TouchableOpacity, Text, Image, Alert} from "react-native";

import {CountDown} from "./countdown";
import  {Styles}  from "../styles/index"

import Temporizador from "../images/temporizador.png"
import Restart from "../images/restart.png"

export default function Countdown () {
    const [Secs, setSecs] = useState(0)
    const [Mins, setMins] = useState(10)
    const [CustomInterval, setCustomInterval] = useState<NodeJS.Timer>();
    const [Disabled, setDisabled] = useState(false)

    const [Secs2, setSecs2] = useState(0)
    const [Mins2, setMins2] = useState(10)
    const [CustomInterval2, setCustomInterval2] = useState<NodeJS.Timer>();
    const [Disabled2, setDisabled2] = useState(false)

    const Counter1 = new CountDown (Secs, setSecs, Mins, setMins, CustomInterval, setCustomInterval, setDisabled, setDisabled2)
    const Counter2 = new CountDown (Secs2, setSecs2, Mins2, setMins2, CustomInterval2, setCustomInterval2, setDisabled2, setDisabled )

    const Reset = () => {
        setMins(10) 
        setSecs(0)
        setMins2(10) 
        setSecs2(0)
        Counter1.StopTimer()
        Counter2.StopTimer()
        setDisabled(false)
        setDisabled2(false)
    }


    if (Mins < 0) {
        Reset() 
        Alert.alert('Congratulations!', 'Player 2 has winned for time!', [
            {
              text: 'OK',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
        ])
    }

    if (Mins2 < 0) {
       Reset() 
       Alert.alert('Congratulations!', 'Player 1 has winned for time!', [
        {
          text: 'OK',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
    ])
    }

    

    return <>
    
        <TouchableOpacity onPress={() => {Counter2.startTimer(); Counter1.StopTimer();}} disabled={Disabled2} style={Styles.button1}>
        <Image
               source={Temporizador}
               style={Styles.image}
            />
                <Text style={Styles.mins}>{Mins < 10 ? '0' + Mins : Mins}</Text>
                <Text style={Styles.twoPoints}>:</Text>
                <Text style={Styles.secs}>{Secs < 10 ? '0' + Secs : Secs}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {Counter1.startTimer(); Counter2.StopTimer();} } disabled={Disabled} style={Styles.button2}>
        <Image
               source={Temporizador}
               style={Styles.image}
            />
                <Text style={Styles.mins}>{Mins2 < 10 ? '0' + Mins2 : Mins2}</Text>
                <Text style={Styles.twoPoints}>:</Text>
                <Text style={Styles.secs}>{Secs2 < 10 ? '0' + Secs2 : Secs2}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{top: '76%', alignSelf: 'center', transform: [{scale: 0.4}], position: "absolute"}} onPress={Reset}>
            <Image
            source={Restart}
            />
        </TouchableOpacity>

    </>
};