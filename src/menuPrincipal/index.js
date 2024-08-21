import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Buttons from './componentes/buttons';
import Top from './componentes/top';

export default function MenuPrincipal(){

  const navigation = useNavigation()

  return <>
   <View style={{flex: 1, backgroundColor: '#8B7167'}}>
     <Buttons/>
     <Top/>
   </View>
  </>
};
