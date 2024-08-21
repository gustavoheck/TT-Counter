import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuPrincipal from '../menuPrincipal';
import Dados from '../telas/dados';
import Truco from '../telas/truco';
import Uno from '../telas/uno';

const Stack = createNativeStackNavigator()

export default function Rotas() {
    return(
    <NavigationContainer>
            <Stack.Navigator initialRouteName={MenuPrincipal} screenOptions={{headerShown: false}}>
                <Stack.Screen name="MenuPrincipal" component={MenuPrincipal}/>
                <Stack.Screen name="Dados" component={Dados}/>
                <Stack.Screen name="Truco" component={Truco}/>
                <Stack.Screen name="Uno" component={Uno}/>
            </Stack.Navigator>
    </NavigationContainer>
    )
};