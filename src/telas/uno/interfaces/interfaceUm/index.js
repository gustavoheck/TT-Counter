import React, { useRef } from 'react';
import { Alert, TouchableOpacity, View, Text } from 'react-native';

import Details from './componentes/Details';
import { stylesViews } from './styles/styleViews';
import NameInputUnoIntUm from './componentes/NameInputUnoIntUm';
import CounterUnoIntUm from './componentes/CounterUnoIntUm';
import { styleOthers } from './styles/styleOthers';

export default function InterfaceUm() {
  const topSideCounterRef = useRef(null);
  const bottomSideCounterRef = useRef(null);

  const resetWinsOnPress = () =>
    Alert.alert('Reset', 'Você realmente deseja resetar o placar?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Reset', onPress: () => {
          topSideCounterRef.current?.resetWins();
          bottomSideCounterRef.current?.resetWins();
        }
      },
    ]);
  
  const ResetWins = () => {
    return <>
      <TouchableOpacity onPress={resetWinsOnPress} style={styleOthers.resetButton}><Text style={styleOthers.resetText}>Reset Wins</Text></TouchableOpacity>
    </>
  }

  return <>
    <View style={stylesViews.topSide}>
      <NameInputUnoIntUm playerName={"PlayerUm"} />
      <CounterUnoIntUm ref={topSideCounterRef} />
    </View>

    <View style={stylesViews.bottomSide}>
      <NameInputUnoIntUm playerName={"PlayerDois"} styleText={styleOthers.name} />
      <CounterUnoIntUm ref={bottomSideCounterRef} />
      <ResetWins />
    </View>
    <Details />
  </>
};