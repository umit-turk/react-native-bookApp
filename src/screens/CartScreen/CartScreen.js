import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Button,
  FlatList,
  Image,
} from 'react-native';
import {styles} from './styles';
import CustomModel from '../../components/CustomModal/CustomModal';
import {useDispatch, useSelector} from 'react-redux';
import useGetCart from '../../hooks/useGetCart/useGetCart';
import {useNavigation} from '@react-navigation/native';
import { removeFromCart } from '../../redux/system/actions';
import useDeleteCart from '../../hooks/useDeleteCart/useDeleteCart';
import Config from 'react-native-config';

export default function CartScreen() {
  const navigation = useNavigation();
  const  dispatch = useDispatch();
  const {deleteItem} = useDeleteCart()

  const isLogin = useSelector(state => state.userAuth.isLogin);
  const cart = useSelector(state => state.cartReducer.cart)
  const {username} = useSelector(state => state.userAuth.user);
  const { getCart} = useGetCart();

  //re-render etmek için kullanıyoruz
  useEffect(() => navigation.addListener('focus', () => getCart()), []);

  const deleteItemCart = (book_id) => {
    deleteItem(Config.DELETE_CART,book_id)
  }

  const renderCart = ({item}) => {
    return (
      <SafeAreaView>
        <Text>{item.book_name}</Text>
        <Image
          style={styles.image}
          source={{
            uri: 'http://192.168.1.43:8080/api/public/book/' + item.image,
          }}
        />
        <Text>{item.price}</Text>
        <TouchableOpacity onPress={() => deleteItemCart(item.book_id)}><Text>Kaldır</Text></TouchableOpacity>
        <View style={styles.btngroup}>
          <TouchableOpacity style={styles.positivebtn}>
            <Text style={styles.positivetext}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.minusbtn}>
            <Text style={styles.minustext}>-</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  return (
    <View style={styles.container}>
      <Text>{Config.DELETE_CART}</Text>
      <Text style={styles.username}>{username}</Text>
      {!isLogin ? (
        <CustomModel />
      ) : (
        <FlatList data={cart} renderItem={renderCart} />
      )}
    </View>
  );
}
