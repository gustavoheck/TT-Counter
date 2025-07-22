import React, { useRef } from "react";
import { View, TouchableOpacity, Text, Alert } from "react-native";
//Styles
import { styleViews } from "./styles/styleViews";
import { styleReset } from "./styles/styleReset";
//Components
import Details from "./componentes/Details";
import NameInputUnoIntDois from "./componentes/NameInputUnoIntDois";
import CounterUnoIntDois from "./componentes/CounterUnoIntDois";

export default function InterfaceDois() {
    const counterBlue = useRef(null);
    const counterRed = useRef(null);
    const counterGreen = useRef(null);
    const counterYellow = useRef(null);

    const resetWinsOnPress = () =>
        Alert.alert('Reset Wins', 'Você realmente deseja resetar os placares?', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {
                text: 'Reset', onPress: () => {
                    counterBlue.current?.resetWins(),
                    counterGreen.current?.resetWins(),
                    counterRed.current?.resetWins(),
                    counterYellow.current?.resetWins()
                }
            },
        ]);

    const ResetWins = () => {
        return <>
            <TouchableOpacity onPress={resetWinsOnPress} style={styleReset.resetButton}><Text style={styleReset.resetText}>Reset Wins</Text></TouchableOpacity>
        </>
    }

    return <>
        <View style={styleViews.blue}>
            <NameInputUnoIntDois choosedName="Blue" />
            <CounterUnoIntDois ref={counterBlue} />
        </View>

        <View style={styleViews.green}>
            <NameInputUnoIntDois choosedName="Green" />
            <CounterUnoIntDois ref={counterGreen} />
        </View>

        <View style={styleViews.red}>
            <NameInputUnoIntDois choosedName="Red" />
            <CounterUnoIntDois ref={counterRed} />
        </View>

        <View style={styleViews.yellow}>
            <NameInputUnoIntDois choosedName="Yellow" />
            <CounterUnoIntDois ref={counterYellow} />
        </View>

        <ResetWins />
        <Details />
    </>
};