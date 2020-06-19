import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function TelaGeral() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Geral!</Text>
    </View>
  );
}

function TelaAtributos() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Atributos!</Text>
    </View>
  );
}

function TelaPericias() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Pericias!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={TelaGeral} />
      <Tab.Screen name="Settings" component={TelaAtributos} />
      <Tab.Screen name="Settings" component={TelaPericias} />
    </Tab.Navigator>
  );
}

export default function App() {
  return <MyTabs />;
}
