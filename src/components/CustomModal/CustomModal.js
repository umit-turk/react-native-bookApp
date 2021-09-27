import React, {useEffect, useState} from 'react';
import {View, Text,  SafeAreaView, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import { useNavigation } from '@react-navigation/native';
import { userScreens } from '../../navigation/router';
import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/dist/Feather'


export default function CustomModel() {
  const navigation = useNavigation();

  const [isModalVisible, setModalVisible] = useState(true);

  const goToLogin = () => {
    setModalVisible(!isModalVisible);
    navigation.navigate(userScreens.LoginScreen);
  };
  const goToRegister = () => {
    setModalVisible(!isModalVisible);
    navigation.navigate(userScreens.RegisterScreen);
  };
 

  //Modal didonmount durumu için kullanıyoruz.Rootnavigation cartscreen bölümü için ayarlamada yaptık.Diğer türlü didonmount edemiyoruz.
  useEffect(
    () => navigation.addListener('focus', () => setModalVisible(true)),
    [],
  );
    
  return (
    <SafeAreaView>
       <Modal
          visible={isModalVisible}
          backdropOpacity={0.7}
          animationIn="bounce"
          animationOut="flash"
          style={{
            marginBottom: 200,
            marginTop: 200,
            borderWidth: 5,
            borderRadius: 10,
          }}
          animationIn="bounce"
          coverScreen={true}>
          <SafeAreaView style={styles.container}>
            <View style={styles.logoArrange}>
              <View style={styles.iconField}>
                <Icon style={styles.icon} name="shopping-cart" />
              </View>
            </View>
            <Text style={styles.header}>Sepete Gidilemedi</Text>
            <Text style={styles.text}>
              Sepetinizi görüntülemek için üye olunuz
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.hizligiris} onPress={goToLogin}>
                <Text style={styles.hizlitext}>Hızlı Giriş</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.kayitol} onPress={goToRegister}>
                <Text style={styles.kayittext}>Kayıt Ol</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </Modal>
    </SafeAreaView>
  );
}
