import React, {useState} from 'react';
import {SafeAreaView, Button, View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Text, Image, StyleSheet, Dimensions, ImageBackground, StatusBar,
} from 'react-native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';

export default function MennuPrincipal() {
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
    body: {
      alignItems: 'center',
    },
    buttonRounded:{
      borderWidth:1,
      borderColor:'#B56969',
      alignItems: 'center',
      width:50,
      height:50,
      backgroundColor:'#8C6641',
      borderRadius:50,
      
      
    },
    buttonPlus: {
      fontFamily: 'Berkahi Blackletter',
      fontSize: 35,
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 15,
      color: '#C29E79',

    },
    logo: {
      width: 50,
      height: 50,
    },
    characterTitle: {
      fontFamily: 'Berkahi Blackletter',
      fontSize: 25,
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 5,
    },
    characterDiv: {
      color:'#FFFFFF',
      paddingLeft:10,
      paddingRight:10,
      borderWidth: 1,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      margin: 5
    },
    characterBox: {
      alignItems: "flex-start",
      flexDirection: "row",  
    },
    
  });

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

  function Item(title: any, navegacao: any) {
    return (
      <View style={styles.characterDiv}>
        <TouchableOpacity
          onPress={() => navegacao.navigate('FichaPersonagem', {title})}>

          <Text style={styles.characterTitle}> {title}</Text>
          <Text style={styles.characterTitle}> CDZ </Text>
          
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView
      style={{flex: 1}}>
        <ImageBackground
        source={require('../assets/background.jpg')}
        style={styles.containerImage}
        resizeMode="cover">

          <View style={styles.body}>

              <Image
              style={styles.logo}
              source={require('../assets/splash.png')}
              />

            <Text style={styles.welcome}>Bem - Vindo</Text>



            <View style={styles.characterBox}>
              <FlatList
                data={lista}
                renderItem={({item}) => Item(item.Nome, navigation)}
                keyExtractor={(item) => item.Nome}
              />
            </View>

            <View style={{alignItems:"flex-start"}}>
              <TouchableOpacity style={styles.buttonRounded}
                onPress={() => navigation.navigate('CadastroDePersonagem')}
              >
                <View >
                    <Text style={styles.buttonPlus}>+</Text>
                </View>
              </TouchableOpacity>
            </View>

          </View>
        </ImageBackground>

    </SafeAreaView>
  );
}
