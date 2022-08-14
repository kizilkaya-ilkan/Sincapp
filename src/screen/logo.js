import React, {useState } from 'react';
import { useNavigation ,componentDidMount } from '@react-navigation/native';

import {
  StyleSheet,
  SafeAreaView,
  View,  
  Text,
  Button,
  TextInput,
  Image,
  Dimensions,
  ActivityIndicator,
  ImageBackground
} from 'react-native';

export default LogoScreen = () => {
  const navigation = useNavigation()
  const [isLoading, setLoading] = useState(false);
  
  const getMovies = async () => {
  navigation.navigate("LoginScreen")
   }
 
     setTimeout(() => {
       getMovies();
   }, 5000);

  return (
    <SafeAreaView style={styles.background}> 
    <View style={styles.container}>
    { isLoading ? <ActivityIndicator/> : (
    <Image style={styles.LogoSettings} source={require('../image/logo.jpg')}></Image>
    )}
    <View style={{justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontSize:20,fontWeight:'bold'}}>SincaPP</Text>
    </View>
    </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  background:
  {
    width:Dimensions.get('screen').width,
    height:Dimensions.get('screen').height,
    flex:1,
    backgroundColor:'#FFFCDF',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  },
  LogoSettings:{
  width:197,
  height:160,
  bottom:20,
  left:11,
  alignItems:'center',
  flex:-1,
  justifyContent:'center'
  }
});