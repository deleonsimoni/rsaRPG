import React, {useState} from 'react';
import {SafeAreaView, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function MennuPrincipal() {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Novo Personagem"
        onPress={() => navigation.navigate('CadastroDePersonagem')}
      />

      <Button
        title="listar"
        onPress={() => navigation.navigate('ListaDePersonagens')}
      />
    </SafeAreaView>
  );
}
