import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const lista = [
  {
    Nome: 'reinaldo o bardo',
  },
  {
    Nome: 'Mago negro juca',
  },
  {
    Nome: 'garindor o anão',
  },
];

function Item(title, navegacao) {
  return (
    <View style={styles.item}>
      <Text style={styles.NomePersonagem}> Nome: {title}</Text>
      <Text style={styles.NomePersonagem}> Tema: CDZ </Text>
      <TouchableOpacity
        onPress={() => navegacao.navigate('FichaPersonagem', {title})}>
        <Text style={styles.NomePersonagem}> click</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function ListarPersonagens() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <FlatList
        data={lista}
        renderItem={({item}) => Item(item.Nome, navigation)}
        keyExtractor={(item) => item.Nome}
      />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </SafeAreaView>
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
  NomePersonagem: {
    fontSize: 14,
  },
});
