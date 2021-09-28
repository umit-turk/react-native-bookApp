import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, Button, FlatList} from 'react-native';
import {styles} from './styles';
import CustomModel from '../../components/CustomModal/CustomModal';
import {useSelector} from 'react-redux'
import useGetCart from '../../hooks/useGetCart/useGetCart';

export default function CartScreen() {
  const isLogin = useSelector(state => state.userAuth.isLogin);
  const {takeCart,getCart} = useGetCart()

  useEffect(() => {
    getCart()
  },[])

  const renderCart = ({item}) => {
    return (
    <SafeAreaView>
      <Text>{item.book_name}</Text>
    </SafeAreaView>
    )
  }
console.log(takeCart,"takeCART")
  return (
    <View style={styles.container}>
      <Text></Text>
      <Text>Cart</Text>
      {!isLogin ? (
       <CustomModel />
      ): <FlatList data={takeCart} renderItem={renderCart} />}
    </View>
  );
}
