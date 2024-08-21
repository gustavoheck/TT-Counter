import React, {useState} from "react";
import { TouchableOpacity, Text, View, Alert} from "react-native";

import { stylesNos } from "../styles/nos";
import { stylesEles } from "../styles/eles";
import { stylesReset } from "../styles/reset";
import { stylesView } from "../styles/view";


export default function Interface (){
    return <>
        <GamePart />
    </>
};


function GamePart (){
    const [NosPontos, setNosPontos] = useState(0)
    const [NosWins, setNosWins]= useState(0)
    const [ElesPontos, setElesPontos] = useState(0)
    const [ElesWins, setElesWins]= useState(0)

    if (NosPontos < 0) {
        setNosPontos(0)
    }
    else if (NosPontos >= 12) {
        setNosWins(NosWins + 1)
        setNosPontos(0)
        setElesPontos(0)
    }

    if (ElesPontos < 0) {
        setElesPontos(0)
    }
    else if (ElesPontos >= 12) {
        setElesWins(ElesWins + 1)
        setElesPontos(0)
        setNosPontos(0)
    }

    const resetWins = () =>
    Alert.alert('Reset Wins', 'You really want to reset all the wins?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Reset', onPress: () => {setNosWins(0), setElesWins(0)}}
    ]);

    const resetPoints = () =>
    Alert.alert('Reset Points', 'You really want to reset all the points?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Reset', onPress: () => {setNosPontos(0), setElesPontos(0)}},
    ]);

    return <>
      <View style={stylesView.nosSquare}>
        <TouchableOpacity onPress={() => setNosPontos(NosPontos + 1)} style={stylesNos.oneNosButton}><Text style={stylesNos.oneNosText}>+</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => setNosPontos(NosPontos + 3)} style={stylesNos.threeNosButton}><Text style={stylesNos.threeNosText}>+3</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => setNosPontos(NosPontos - 3)} style={stylesNos.threeNosButtonMinus}><Text style={stylesNos.threeNosText}>-3</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => setNosPontos(NosPontos - 1)} style={stylesNos.oneNosButtonMinus}><Text style={stylesNos.oneNosText}>-</Text></TouchableOpacity>

        <Text style={stylesNos.pointCountNos}>{NosPontos}</Text>
      </View>

      <View style={stylesView.elesSquare}>
        <TouchableOpacity onPress={() => setElesPontos(ElesPontos + 1)} style={stylesEles.oneElesButton}><Text style={stylesEles.oneElesText}>+</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => setElesPontos(ElesPontos + 3)} style={stylesEles.threeElesButton}><Text style={stylesEles.threeElesText}>+3</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => setElesPontos(ElesPontos - 3)} style={stylesEles.threeElesButtonMinus}><Text style={stylesEles.threeElesText}>-3</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => setElesPontos(ElesPontos - 1)} style={stylesEles.oneElesButtonMinus}><Text style={stylesEles.oneElesText}>-</Text></TouchableOpacity>

        <Text style={stylesEles.pointCountEles}>{ElesPontos}</Text>
      </View>

      <View style={stylesView.nosWinsSquare}>
        <Text style={stylesNos.NosWins}>{NosWins}</Text>
        <TouchableOpacity onPress={resetPoints} style={stylesReset.ResetPoints}><Text style={stylesReset.resetText}> Reset Points </Text></TouchableOpacity>
      </View>

      <View style={stylesView.elesWinsSquare}>
        <Text style={stylesEles.ElesWins}>{ElesWins}</Text>
        <TouchableOpacity onPress={resetWins} style={stylesReset.resetWins}><Text style={stylesReset.resetText}> Reset Wins </Text></TouchableOpacity>
      </View>
    </>
};

