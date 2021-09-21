import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {userScreens} from '../../navigation/router';
import {styles} from './styles';
import Config from 'react-native-config';
import createPost from '../../usePost/createUser';

export default function RegisterScreen() {
  const {create, createUser, loading, error} = createPost();
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(userScreens.LoginScreen);
  };
  function handleLogin(values) {
    create(Config.API_AUTH_URL + '/register', values);
  }
  if (createUser) {
    console.log(createUser);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Kayıt Olunuz</Text>
      <Formik
        initialValues={{user_name: '', email: '', password: ''}}
        onSubmit={handleLogin}>
        {({handleSubmit, handleChange, values}) => (
          <>
            <TextInput
              value={values.user_name}
              style={styles.userinput}
              placeholder="username"
              onChangeText={handleChange('user_name')}
            />
            <TextInput
              value={values.password}
              style={styles.passwordinput}
              placeholder="Şifre"
              onChangeText={handleChange('password')}
            />
            <TextInput
              value={values.email}
              style={styles.passwordinput}
              placeholder="email"
              onChangeText={handleChange('email')}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={goToLogin} style={styles.register}>
                <Text style={styles.uyeText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSubmit} style={styles.login}>
                <Text style={styles.giristext}>Giriş</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
      <Text>{Config.API_AUTH_URL}</Text>
    </SafeAreaView>
  );
}
