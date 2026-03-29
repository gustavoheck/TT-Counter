import React from "react";
import { Alert, Text, TouchableOpacity } from "react-native";
import { styleReset } from "../styles/styleReset";

export default function ResetButton({
    buttonTitle = "Button",
    alertTitle = "Confirm",
    cancelButtonText = "Cancel",
    confirmButtonText = "Reset",
    confirmButtonMessage = "Do you really want to reset all the scoreboards?",
    onConfirm
}) {

    if (onConfirm === undefined || onConfirm === null) {
        console.error("It's necessary to define a function for confirmation!");
    };

    const resetAlert = () => {
        Alert.alert(alertTitle, confirmButtonMessage, [
            {
                text: cancelButtonText,
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: confirmButtonText, onPress: () => { onConfirm() } },
        ])
    };

    return <>
        <TouchableOpacity onPress={resetAlert} style={styleReset.resetButton}><Text style={styleReset.resetText}>{buttonTitle}</Text></TouchableOpacity>
    </>
};