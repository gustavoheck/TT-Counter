import React from "react";
import { Alert, Text, TouchableOpacity } from "react-native";
import { styleReset } from "../styles/styleReset";

export default function ResetButton({
    buttonText = "Botão",
    confirmButtonText = "Confirm",
    cancelButtonText = "Cancel",
    confirmButtonMessage = "Você realmente deseja resetar?",
    onConfirm
}) {

    if (onConfirm === undefined || onConfirm === null) {
        console.error("É necessário definir uma função de confirmação");
    };

    const resetAlert = () => {
        Alert.alert(confirmButtonText, confirmButtonMessage, [
            {
                text: cancelButtonText,
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'Reset', onPress: () => { onConfirm() } },
        ])
    };

    return <>
        <TouchableOpacity onPress={resetAlert} style={styleReset.resetButton}><Text style={styleReset.resetText}>{buttonText}</Text></TouchableOpacity>
    </>
};