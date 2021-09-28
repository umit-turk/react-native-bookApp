import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Feather';
import {styles} from './styles';

export default function ProfilButton({children, exitBtn, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonarea}>
      <View>
        <Text style={styles.text}>
          {exitBtn ? children : 'Profil bilgilerini güncelle'}
        </Text>
        <Text style={styles.lorem}>
          {exitBtn ? '' : 'Lorem ipsum dolor sit amet'}
        </Text>
      </View>
      <View style={styles.iconArea}>
        <Icon name="arrow-right" />
      </View>
    </TouchableOpacity>
  );
}
