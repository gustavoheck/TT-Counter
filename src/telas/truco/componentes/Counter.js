import React, { useState, Component } from "react";
import { TouchableOpacity, Text, View, Alert, Image, } from "react-native";

import { styleCounter } from "../styles/styleCounter";

import hearts from "../images/hearts.png"
import diamonds from "../images/diamonds.png"
import spades from "../images/spades.png"
import clubs from "../images/clubs.png"


export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pontos: 0,
      wins: 0,
    };
  }

  botaoOnPress = (aumentoOuDecremento) => {
      if (this.state.pontos + (aumentoOuDecremento) >= 0) {
        this.setState({pontos: this.state.pontos + (aumentoOuDecremento)});
      }
      if (this.state.pontos + (aumentoOuDecremento) >= 12) {
        this.setState({pontos: 0});
        this.setState({wins: this.state.wins + 1});
      }
  }

  BotoesIncrementais = ({aumentoOuDecremento, imagem, estiloBotao, estiloTexto, text }) => {
    return <>
      <TouchableOpacity onPress={() => this.botaoOnPress(aumentoOuDecremento)} style={estiloBotao}>
        <Image source={imagem} style={{ transform: [{ scale: 0.3 }], position: 'absolute' }} />
        <Text style={estiloTexto}>{text}</Text>
      </TouchableOpacity>
    </>
  }

  resetWins = () => {
    this.setState({wins: 0});
  }

  resetPoints = () => {
    this.setState({pontos: 0});
  }

  render() {
    return <>
      <this.BotoesIncrementais
        aumentoOuDecremento={1}
        imagem={hearts}
        estiloBotao={styleCounter.oneButtonAdd}
        estiloTexto={styleCounter.oneText}
        text="+" />

      <this.BotoesIncrementais
        aumentoOuDecremento={-1}
        imagem={diamonds}
        estiloBotao={styleCounter.oneButtonMinus}
        estiloTexto={styleCounter.oneText}
        text="-" />

      <this.BotoesIncrementais
        aumentoOuDecremento={3}
        imagem={clubs}
        estiloBotao={styleCounter.threeButtonAdd}
        estiloTexto={styleCounter.threeText}
        text="+3" />

      <this.BotoesIncrementais
        aumentoOuDecremento={-3}
        imagem={spades}
        estiloBotao={styleCounter.threeButtonMinus}
        estiloTexto={styleCounter.threeText}
        text="-3" />

      <Text style={styleCounter.pointCount}>{this.state.pontos}</Text>
      <Text style={styleCounter.winsCount}>{this.state.wins}</Text>
    </>
  }
};

