import React, { useState } from "react";
import { TouchableOpacity, Text, View, Alert, Image, } from "react-native";

import { stylesCounters } from "../styles/counters";
import { stylesReset } from "../styles/reset";
import { stylesView } from "../styles/view";

import hearts from "../images/hearts.png"
import diamonds from "../images/diamonds.png"
import spades from "../images/spades.png"
import clubs from "../images/clubs.png"


export default function Interface() {
  return <>
    <GamePart />
  </>
};

const GamePart = () => {

  const [NosPontos, setNosPontos] = useState(1)
  const [NosWins, setNosWins] = useState(0)
  const [ElesPontos, setElesPontos] = useState(0)
  const [ElesWins, setElesWins] = useState(0)

  if (NosPontos < 0) {
    setNosPontos(0)
  } else if (NosPontos >= 12) {
    setNosWins(NosWins + 1)
    setNosPontos(0)
    setElesPontos(0)
  }

  if (ElesPontos < 0) {
    setElesPontos(0)
  } else if (ElesPontos >= 12) {
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
      { text: 'Reset', onPress: () => { setNosWins(0), setElesWins(0) } }
    ]);

  const resetPoints = () =>
    Alert.alert('Reset Points', 'You really want to reset all the points?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'Reset', onPress: () => { setNosPontos(0), setElesPontos(0) } },
    ]);

  const BotoesIncrementais = ({ jogador, aumentoOuDecremento, imagem, estiloBotao, estiloTexto, text }) => {
    return <>
      <TouchableOpacity onPress={botaoOnPress(jogador, aumentoOuDecremento)} style={estiloBotao}>
        <Image source={imagem} style={{ transform: [{ scale: 0.3 }], position: 'absolute' }} />
        <Text style={estiloTexto}>{text}</Text>
      </TouchableOpacity>
    </>
  }

  const botaoOnPress = (jogador, aumentoOuDecremento) => {
    if (jogador == 1) {
      return () => setNosPontos(NosPontos + (aumentoOuDecremento))
    } else if (jogador == 2) {
      return () => setElesPontos(ElesPontos + (aumentoOuDecremento))
    } else {
      console.error("Jogador inválido, existem somente dois jogadores. (Nos = 1 e Eles = 2)");
    }
  }
  const verificarJogador = (jogador) => {
    if (jogador == 1) { 
      return NosPontos;
    } else if (jogador == 2) {
      return ElesPontos;
    } else {
      console.error("Jogador inválido, existem somente dois jogadores. (Nos = 1 e Eles = 2)");
    }
  }

  const Contador = ({jogador}) => {
    return <>
      <BotoesIncrementais
        aumentoOuDecremento={1}
        imagem={hearts}
        jogador={jogador}
        estiloBotao={stylesCounters.oneButtonAdd}
        estiloTexto={stylesCounters.oneText}
        text="+" />

      <BotoesIncrementais
        aumentoOuDecremento={-1}
        imagem={diamonds}
        jogador={jogador}
        estiloBotao={stylesCounters.oneButtonMinus}
        estiloTexto={stylesCounters.oneText}
        text="-" />

      <BotoesIncrementais
        aumentoOuDecremento={+3}
        imagem={clubs}
        jogador={jogador}
        estiloBotao={stylesCounters.threeButtonAdd}
        estiloTexto={stylesCounters.threeText}
        text="+3" />

      <BotoesIncrementais
        aumentoOuDecremento={-3}
        imagem={spades}
        jogador={jogador}
        estiloBotao={stylesCounters.threeButtonMinus}
        estiloTexto={stylesCounters.threeText}
        text="-3" />

        <Text style={stylesCounters.pointCount}>{verificarJogador(jogador)}</Text>
    </>
  }

  return <>
    <View style={stylesView.nosSquare}>
      <Contador jogador={1} />
    </View>

    <View style={stylesView.elesSquare}>
        <Contador jogador={2} />
    </View>

    <View style={stylesView.nosWinsSquare}>
      <Text style={stylesCounters.Wins}>{NosWins}</Text>
      <TouchableOpacity onPress={resetPoints} style={stylesReset.ResetPoints}><Text style={stylesReset.resetText}> Reset Points </Text></TouchableOpacity>
    </View>

    <View style={stylesView.elesWinsSquare}>
      <Text style={stylesCounters.Wins}>{ElesWins}</Text>
      <TouchableOpacity onPress={resetWins} style={stylesReset.resetWins}><Text style={stylesReset.resetText}> Reset Wins </Text></TouchableOpacity>
    </View>
  </>
};

