import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, Button} from 'react-native';
import {styles} from './styles';
import CustomModel from '../../components/CustomModal/CustomModal';
import {useSelector} from 'react-redux'

export default function CartScreen() {
  const isLogin = useSelector(state => state.userAuth.isLogin);

  return (
    <View>
      <Text>Cart</Text>
      {!isLogin && (
       <CustomModel />
      )}
    </View>
  );
}
