import React, { useEffect, useState } from 'react';
import { useNavigation , useRoute} from '@react-navigation/native'
import Geolocation from '@react-native-community/geolocation';

import {
  SafeAreaView,
  StyleSheet,
  View,  
  MapView,
  Text,
  Button,
} from 'react-native';


export default Users = () => {

  const [kordinat , Setkordinat] = useState([])

  const route = useRoute()

  const getMovies = async () => {
    Geolocation.watchPosition(
      position => {
        Setkordinat([position.coords.latitude,position.coords.longitude])
      },
      error => (error),
      {
        enableHighAccuracy: true,
        timeout: 20000
      }
    )
     }
       setTimeout(() => {
         getMovies();
     }, 5000);

  return (
    <SafeAreaView style={styles.background}>
    <View style={{margin:8}}>
        <Text style={{fontSize:20,}}>Hoş Geldiniz {route.params.Users} <Text> {"\n"}Kordinat X: {kordinat[0]+" Kordinat Y:"+ kordinat[1]}</Text></Text>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background:{
    backgroundColor:'lightgray',
    flex:1,
    justifyContent:'flex-start',
    alignItems:'flex-start',
  },
});

