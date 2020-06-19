import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  Button,
  View,
  SafeAreaView,
  FlatList,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

//import ListaDePersonagens from './pages/Lista/index';
import pageCadastrarPersonagem from './pages/CadastroDePersonagem';

const lista = [
  {
    Nome: 'espadachin de carvao',
  },
  {
    Nome: 'Mago negro juca',
  },
  {
    Nome: 'garindor o anão',
  },
];

function MenuPrincipal({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Novo Personagem"
        onPress={() => navigation.navigate('CadastroDePersonagem')}
      />

      <Button
        title="listar"
        onPress={() => navigation.navigate('ListaDePersonagens')}
      />
    </View>
  );
}

function Item({title}) {
  return (
    <View style={styles.item}>
      <Text style={styles.Nome}>{title}</Text>
    </View>
  );
}

function Listar({navigation}) {
  return (
    <SafeAreaView>
      <FlatList
        data={lista}
        renderItem={({item}) => <Item title={item.Nome} />}
        keyExtractor={(item) => item.title}
      />
    </SafeAreaView>

    /*<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          title="Lista De personagens"
          onPress={() => navigation.navigate('Profile')}
        />
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>*/
  );
}

function CadastroDePersonagem({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        value={'value'}
      />

      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        value={'value'}
      />

      <Button
        title="Cadastrar"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="MenuPrincipal" component={MenuPrincipal} />
        <Stack.Screen name="ListaDePersonagens" component={Listar} />
        <Stack.Screen
          name="CadastroDePersonagem"
          component={pageCadastrarPersonagem}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
  },
  item: {
    backgroundColor: '#87CEEB',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
