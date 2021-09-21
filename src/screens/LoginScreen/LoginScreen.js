import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/core';
import {userScreens} from '../../navigation/router';
import {useDispatch} from 'react-redux';
import { addName, addPassword, setUser } from '../../redux/system/actions';
import { Formik } from 'formik';
import usePost from '../../usePost/usePost';
import Config from "react-native-config";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function LoginScreen() {
   
  const dispatch = useDispatch()
  const navigation = useNavigation();

  const goToRegister = () => {
    navigation.navigate(userScreens.RegisterScreen);
  };

  const {data, post, error, loading} = usePost();

function handleLogin(values){
    post(Config.API_AUTH_URL + "/login", values)
}
 if(error){
     console.log(" hata tespit edildi", error)
 }
 if(data){
     console.log(data)
    if(data.status === "Error"){
        alert("kullanıcı bulunamadı")
    }else{
        dispatch(setUser({user:data}))
    }
 }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Giriş Yapınız</Text>
      <Formik
      initialValues={{email: "", password: ""}}
      onSubmit={handleLogin}
      
      >
   {({handleSubmit, handleChange, values}) => (
   <>
   <TextInput
        value={values.email}
        style={styles.userinput}
        placeholder="Email"
        onChangeText={handleChange('email')}
      />
      <TextInput
        value={values.password}
        style={styles.passwordinput}
        placeholder="Şifre"
        onChangeText={handleChange('password')}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.register} onPress={goToRegister}>
          <Text style={styles.uyeText}>Üye Ol</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={handleSubmit} style={styles.login}>
          <Text style={styles.giristext}>Giriş</Text>
        </TouchableOpacity>
      </View>
      </>
      )}
      </Formik>
    </SafeAreaView>
  );
}
