import React, { useState } from "react";
import { Text, TouchableOpacity, Image, ImageBackground, } from "react-native";
import { estiloBotaoDado } from "./EstilosBotaoDado";

export default function BotaoDado({ minDado, maxDado, imagemDado, estiloBotao, estiloNumero, estiloImagem}) {
    const [number, setNumber] = useState(1);

    const rollDice = () => {
        const randomNumber = Math.floor(Math.random() * (maxDado - minDado + 1) + minDado);
        setNumber(randomNumber);
    };

    if (estiloImagem === undefined || estiloImagem === null || estiloNumero === undefined || estiloNumero === null) {
        if (estiloNumero === undefined || estiloNumero === null) {
            estiloNumero = estiloBotaoDado.number;
            
        }
        if (estiloImagem === undefined || estiloImagem === null) {
            estiloImagem = estiloBotaoDado.image;
        }
    }

    return <>
        <TouchableOpacity onPress={rollDice} style={estiloBotao}>
            <ImageBackground
                source={imagemDado}
                style={estiloImagem}
            >
                <Text style={estiloNumero}>{number}</Text>
            </ImageBackground>

        </TouchableOpacity>
    </>
};