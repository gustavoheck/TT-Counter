import React from "react";
import { Alert, Text, TouchableOpacity } from "react-native";
import { styleReset } from "../styles/styleReset";

export default function ResetButton({ buttonText, confirmButtonText, cancelButtonText, confirmButtonMessage, onConfirm }) {

    if (buttonText === undefined || buttonText === null) {
        buttonText = "Botão"
    } if (confirmButtonText === undefined || confirmButtonText === null) {
        confirmButtonText = "Confirm";
    } if (cancelButtonText === undefined || cancelButtonText === null) {
        cancelButtonText = "Cancel";
    } if (confirmButtonMessage === undefined || confirmButtonMessage === null) {
        confirmButtonMessage = "Você realmente deseja resetar?";
    } if (onConfirm === undefined || onConfirm === null) {
        console.error("É necessário definir uma função de confirmação");
    }

    const resetAlert = () => {
        Alert.alert(confirmButtonText, confirmButtonMessage, [
            {
                text: cancelButtonText,
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'Reset', onPress: () => {onConfirm()}},
        ])
    }

    return <>
        <TouchableOpacity onPress={resetAlert} style={styleReset.resetButton}><Text style={styleReset.resetText}>{buttonText}</Text></TouchableOpacity>
    </>
}