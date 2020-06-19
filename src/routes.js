import 'react-native-gesture-handler';
import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

//import ListaDePersonagens from './pages/Lista/index';
import CadastrarPersonagem from './pages/CadastroDePersonagem';
import MenuPrincipal from './pages/MenuPrincipal';
import FichaPersonagem from './pages/FichaPersonagem';
import Listar from './pages/ListaDePersonagens';
import TabMenu from './pages/TabMenu';

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="MenuPrincipal" component={MenuPrincipal} />
        <Stack.Screen name="ListaDePersonagens" component={Listar} />
        <Stack.Screen name="CadastroDePersonagem" component={CadastrarPersonagem}/>
        <Stack.Screen name="FichaPersonagem" component={FichaPersonagem} />
        <Stack.Screen name="tabMenu" component={TabMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
