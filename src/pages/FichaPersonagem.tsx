import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Picker,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

export default function EditarFichaPersonagem() {
  const [nome, setNome] = useState('garoto juca');
  const [Sistema, setSistema] = useState('CDZ');
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Forca</Text>

      <TextInput
        style={{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}}
        value={nome}
        onChangeText={(text) => setNome({text})}
      />

      <Text>Destreza</Text>

      <TextInput
        style={{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}}
        value={nome}
        onChangeText={(text) => setNome({text})}
      />

      <Text>Vigor</Text>

      <TextInput
        style={{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}}
        value={nome}
        onChangeText={(text) => setNome({text})}
      />

      <Text>Inteligencia</Text>

      <TextInput
        style={{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}}
        value={nome}
        onChangeText={(text) => setNome({text})}
      />

      <Text>Sabadoria</Text>

      <TextInput
        style={{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}}
        value={nome}
        onChangeText={(text) => setNome({text})}
      />

      <Text>Manipulacao</Text>

      <TextInput
        style={{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}}
        value={nome}
        onChangeText={(text) => setNome({text})}
      />

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Profile')}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.BotaoFlutuante}
        onPress={() => navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 10,
    backgroundColor: '#87CEEB',
    borderRadius: 5,
  },
  BotaoFlutuante: {
    position: 'absolute',
    backgroundColor: '#7159c1',
    borderRadius: 50,
    width: 60,
    height: 60,
    bottom: 40,
    right: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
