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

export default function AdicionarPersonagem() {
  const [nome, setNome] = useState('garoto juca');
  const [Sistema, setSistema] = useState('CDZ');
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Nome</Text>

      <TextInput
        style={{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}}
        value={nome}
        onChangeText={(text) => setNome({text})}
      />

      <Text>Tema</Text>
      <Picker
        selectedValue={Sistema}
        style={{height: 50, width: 250}}
        onValueChange={(itemValue, itemIndex) => setSistema(itemValue)}>
        <Picker.Item label="Cavaleiros do Zodiaco" value="CDZ" />
        <Picker.Item label="Boku no Hero" value="BNH" />
        <Picker.Item label="Black Clover" value="BNH" />
      </Picker>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Profile')}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
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
});
