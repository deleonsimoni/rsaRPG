import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function AdicionarPersonagem() {
  const [nome, setNome] = useState('garoto juca');
  const [forca, setForca] = useState('');
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text  />
      <TextInput
        style={{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}}
        value={nome}
      />

      <TextInput
        style={{height: 40, width: 100, borderColor: 'white', borderWidth: 1}}
        value={forca}
      />

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
    </View>
  );
}
const styles = StyleSheet.create({
  buttonStyle: {
    padding: 10,
    backgroundColor: '#87CEEB',
    borderRadius: 5,
  },
});
