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

export default function AdicionarPersonagem() {
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

    buttonStyle: {
      borderWidth:1,
      borderColor:'#B56969',
      width: '100%',
      height: 45,
      backgroundColor:'#8C6641',
      alignItems:"center",
      alignContent:"center",
      textAlign:"center",
      marginBottom: 5,
      
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
      style={styles.containerImage}>

      <ImageBackground
              source={require('../assets/background.jpg')}
              style={styles.containerImage}
              resizeMode="cover">

          <Text style={styles.welcome}>Seu Heroi</Text>
          <View style={{padding: 4}}>
            <Text style={styles.label}>Nome</Text>

            <TextInput
              style={styles.characterDiv}
              value={nome}
              onChangeText={(text) => setNome({text})}
            />

            <Text style={styles.label}>Tema</Text>
            <Picker
              selectedValue={Sistema}
              style={styles.characterDiv}
              onValueChange={(itemValue, itemIndex) => setSistema(itemValue)}>
              <Picker.Item label="Cavaleiros do Zodiaco" value="cdv" />
              <Picker.Item label="Boku no Hero" value="bnh" />
              <Picker.Item label="Black Clover" value="blc" />
            </Picker>

            <View>
              <TouchableOpacity
                style={[styles.buttonStyle, {marginTop: 28, backgroundColor: '#ABA87B'}]}
                onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.textButton}>Cadastrar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.buttonStyle , {backgroundColor: '#DB7656'}]}
                onPress={() => navigation.goBack()}>
                <Text style={styles.textButton}>Voltar</Text>
              </TouchableOpacity>
            </View>
          </View>
      </ImageBackground>

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
