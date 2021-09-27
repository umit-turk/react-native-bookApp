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
import Config from "react-native-config";
import usePost from '../../hooks/usePost/usePost';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginValidations } from '../../components/Validation';

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
    if(data.status === "Error"){
        alert("kullanıcı bulunamadı")
    }else{
        dispatch(setUser({user:data}))
    }
 }
 console.log("token sen misin",data)
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.epostaText}>E-posta Adresi:</Text>
      <Formik
      initialValues={{email: "", password: ""}}
      onSubmit={handleLogin}
      validationSchema={loginValidations}
      >
   {({handleSubmit, handleChange, handleBlur, errors, touched, values}) => (
   <>
   <TextInput
        value={values.email}
        style={styles.userinput}
        onChangeText={handleChange('email')}
        onBlur={handleBlur}
      />
      {errors.email && touched.email && (
          <Text>{errors.email}</Text>
      )}
      <Text style={styles.sifreText}>Şifre:</Text>
      <TextInput
        value={values.password}
        style={styles.passwordinput}
        onChangeText={handleChange('password')}
        onBlur={handleBlur}
      />
      {errors.password && touched.password && (
          <Text>{errors.password}</Text>
      )}
      <View style={styles.buttonContainer}>
      <TouchableOpacity  onPress={handleSubmit} style={styles.login}>
          <Text style={styles.giristext}>Giriş</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.register} onPress={goToRegister}>
          <Text style={styles.uyeText}>Üye Ol</Text>
        </TouchableOpacity>
        
      </View>
      </>
      )}
      </Formik>
    </SafeAreaView>
  );
}
