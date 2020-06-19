import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Picker,
  ImageBackground,
  View,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

export default function EditarFichaPersonagem() {
  const [nome, setNome] = useState('garoto juca');
  const [Sistema, setSistema] = useState('CDZ');
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    containerImage: {
      flex: 1,
      width: '100%', height: '100%'
    },
    welcome: {
      color: '#DDD',
      alignItems: 'center',
      fontSize: 40,
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
      fontFamily: 'Berkahi Blackletter',
    },

    label: {
      fontFamily: 'Berkahi Blackletter',
      fontSize: 25,
    },

    characterDiv: {
      color:'#1F1B17',
      paddingLeft:10,
      paddingRight:10,
      borderWidth: 1,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      margin: 5
    },

    dashboard: {
      borderWidth:1,
      borderColor:'black',
      width: '100%',
      height: 45,
      alignItems:"center",
      alignContent:"center",
      textAlign:"center",
      marginBottom: 5,
      
    },

    itemDashboard: {
      borderWidth:1,
      width:'33%',
      height: '100%'
    },

    textButton: {
      fontFamily: 'Berkahi Blackletter',
      alignItems:"center",
      alignContent:"center",
      textAlign:"center",
      fontSize: 25,
    }
    
  });


  return (
    <SafeAreaView
      style={{flex: 1}}>

      <ImageBackground
                    source={require('../assets/background.jpg')}
                    style={styles.containerImage}
                    resizeMode="cover">

          <Text style={styles.welcome}>Nome do Heroi</Text>

          <View style={{paddingLeft: 4}}>


            <View style={[styles.dashboard, {flexDirection:"row"}]}>

              <View style={styles.itemDashboard}>

                 <Text>Nome do Heroi</Text>

              </View>

              <View style={styles.itemDashboard}>

                <Text>Nome do Heroi</Text>

              </View>

              <View style={styles.itemDashboard}>
                <Text>Nome do Heroi</Text>


              </View>


            </View>




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

          </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

