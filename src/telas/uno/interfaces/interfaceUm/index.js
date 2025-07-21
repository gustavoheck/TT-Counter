import React, { useRef } from 'react';
import { Alert, TouchableOpacity, View, Text } from 'react-native';

import Details from './componentes/details';
import { stylesViews } from './styles/styleViews';
import NameInputUnoIntUm from './componentes/NameInputUnoIntUm';
import Counter from './componentes/Counter';
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
      <Counter ref={topSideCounterRef} />
    </View>

    <View style={stylesViews.bottomSide}>
      <NameInputUnoIntUm playerName={"PlayerDois"} styleText={styleOthers.name} />
      <Counter ref={bottomSideCounterRef} />
      <ResetWins />
    </View>
    <Details />
  </>
};