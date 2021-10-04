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
import createPost from '../../hooks/usePost/createUser';
import {validations} from '../../components/Validation';

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
    console.log("kayıt",createUser);
    navigation.navigate(userScreens.LoginScreen)
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Kayıt Olunuz</Text>
      <Formik
        initialValues={{username: '', email: '', password: ''}}
        onSubmit={handleLogin}
        validationSchema={validations}
        >
        {({handleSubmit, handleChange, handleBlur, touched ,values, errors}) => (
          <>
            <TextInput
              value={values.username}
              style={styles.userinput}
              placeholder="username"
              onChangeText={handleChange('username')}
              onBlur={handleBlur}
            />
            {errors.username && touched.username && (
              <Text>{errors.username}</Text>
            )}
            <TextInput
              value={values.password}
              style={styles.passwordinput}
              placeholder="Şifre"
              onChangeText={handleChange('password')}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && (
              <Text>{errors.password}</Text>
            )}
            <TextInput
              value={values.email}
              style={styles.passwordinput}
              placeholder="email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && (
              <Text>{errors.email}</Text>
            )}
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={goToLogin} style={styles.register}>
                <Text style={styles.uyeText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSubmit} style={styles.login}>
                <Text style={styles.giristext}>Tamamla</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
      <Text>{Config.API_AUTH_URL}</Text>
    </SafeAreaView>
  );
}
