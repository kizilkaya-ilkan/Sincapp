import React, { useEffect, useState } from 'react';
import { useNavigation} from '@react-navigation/native';
import auth from "@react-native-firebase/auth"
import LottieView from 'lottie-react-native';


import {
  SafeAreaView,
  StyleSheet,
  View,  
  Text,
  Image,
  Button,
  Alert,
  TextInput,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

export default RegisterScreen = () => {
   
const [Kuladi , SetKuladi] = useState("");
const [Keyadi , SetKeyadi] = useState("");


const getMovies = () => {
  {LottieView}
 }

   setTimeout(() => {
    getMovies();
 }, 0);



const doSignUp = () => {
  if (!Kuladi || !Keyadi) {
    Alert.alert('Hata', 'Mail Adresi Veya Şifrenizi Boş Bırakamazsınız.');
    return;
  } 
  else if (
    !Keyadi &&
    Keyadi.trim() &&
    Keyadi.length > 6
  ) {
    Alert.alert('Hatta:', 'Şifre Minimum en az 6 haneli olmalı.');
    return;
  } else {
    __doCreateUser(Kuladi, Keyadi);
    return;
  }
};
const __doCreateUser = async () => {
  try {
    let response = await auth().createUserWithEmailAndPassword(
      Kuladi,
      Keyadi,
    );
    if (response) {
      console.log(response);
      Alert.alert('Kayit Başarılı', 'SincAPP Uygulamasına Hoş Geldiniz.!!');
    }
  } catch (e) {
    Alert.alert("Hata Meydana Geldi Bilgilerinizi Tekrar kontrol ediniz.")
  }
};
  return (
    <SafeAreaView style={styles.background}>
    <View style={{zIndex:0,flex:0,marginBottom:30,marginTop:20,bottom:20}}>
      <Text style={{fontSize:48, fontWeight:'900', margin:5,left:-1}}>Hello </Text>
      <TextInput value={Kuladi} onChangeText={SetKuladi} keyboardType='email-address' placeholder='Kullanici Mail Adres' style={styles.input}></TextInput>
      <TextInput value={Keyadi} onChangeText={SetKeyadi} secureTextEntry={true} placeholder='Şifre' style={styles.input}></TextInput>
      <View style={[styles.buttonstly,styles.btn]}>
     <TouchableOpacity  onPress={doSignUp}>
      <Text style={{fontSize: 18,
           color: "black",
           fontWeight: "bold",
           alignSelf: "center",
           textTransform: "uppercase"}}>Kayıt Ol
      </Text>
     </TouchableOpacity>
      </View>
    </View>
    <View style={{flex:-1,zIndex:0,justifyContent:'flex-start',alignItems:'baseline',height:180}}>  
     <LottieView  
        style={{height: 300,width:20,justifyContent:'center',left:-20,top:15}}  
        source={require('../animasyon/animal.json')}  
        autoPlay  
      />  
    </View>
    {LottieView}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  background:{
    backgroundColor:'#FFFCDF',
    flex:1,
    width:Dimensions.get('screen').width,
    height:Dimensions.get('screen').height,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonstly:{
    zIndex:1,
    flex:-1,
    marginTop:10,alignItems:'center',justifyContent:'center', marginTop:20,
    marginLeft:20,
    marginRight:20,
    elevation: 18,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  btn:{
    backgroundColor: "#009688"
  },
  btx:{
    backgroundColor: "red"
  },
  input:{
    zIndex:1,
    flex:-1,
    borderWidth: 1,
    padding: 10,
    height: 40,
    width:250,
    marginBottom:10,
    marginTop:10,
    borderRadius:30,
    borderWidth:3,
    fontSize:16,
    fontWeight:'bold',
    textAlign:'left'
  },
});

