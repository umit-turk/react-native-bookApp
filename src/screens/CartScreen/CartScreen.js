import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import {styles} from './styles';
import CustomModel from '../../components/CustomModal/CustomModal';
import {useDispatch, useSelector} from 'react-redux';
import useGetCart from '../../hooks/useGetCart/useGetCart';
import {useNavigation} from '@react-navigation/native';
import {
  decrementCounter,
  incrementCounter,
  removeFromCart,
} from '../../redux/system/actions';
import useDeleteCart from '../../hooks/useDeleteCart/useDeleteCart';
import Config from 'react-native-config';
import useaddToCart from '../../hooks/useaddToCart/useaddToCart';

export default function CartScreen() {
  //react navigation'dan aldığımız hook.
  const navigation = useNavigation();

  //hooklardan aldıklarımız
  const {deleteItem} = useDeleteCart();
  const {getCart} = useGetCart();
  const {addToCart} = useaddToCart();

  //redux işlemi için
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.userAuth.isLogin);
  const cart = useSelector(state => state.cartReducer.cart);
  const {username} = useSelector(state => state.userAuth.user);

  //re-render etmek için kullanıyoruz
  useEffect(() => navigation.addListener('focus', () => getCart()), []);

  //sepetteki ürünü silmek için kullanıyoruz
  const deleteItemCart = book_id => {
    deleteItem(Config.DELETE_CART, book_id);
    console.log('silme', book_id);
  };

  //sepetteli ürünü arttırmak için kullanıyoruz.adet den sonra gelen callback fonksiyonu
  const incrementItem = (item, adet) => {
    addToCart(
      Config.ADD_TO_CART,
      item,
      adet,
      ()=>dispatch(incrementCounter(item.book_id, adet)),
    );
  };

  //sepetteki ürünü azaltmak için kullanıyoruz.adet den sonra gelen callback fonksiyonu.
  const decrementItem = (item, adet) => {
    if (adet >= 1) {
      addToCart(
        Config.ADD_TO_CART,
        item,
        adet,
       ()=> dispatch(decrementCounter(item.book_id, adet)),
      );
    }
  };
  console.log('cart', cart);

  //sepetteki ürünleri listelemek için kullandığımız fonksiyon Flatlistteki renderItem'a atıyoruz.
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
        <Text>{item.adet}</Text>
        <TouchableOpacity onPress={() => deleteItemCart(item.book_id)}>
          <Text>Kaldır</Text>
        </TouchableOpacity>
        <View style={styles.btngroup}>
          <TouchableOpacity
            onPress={() => incrementItem(item, item.adet + 1)}
            style={styles.positivebtn}>
            <Text style={styles.positivetext}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => decrementItem(item, item.adet - 1)}
            style={styles.minusbtn}>
            <Text style={styles.minustext}>-</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.username}>{username}</Text>
      {!isLogin ? (
        <CustomModel />
      ) : (
        <FlatList data={cart} renderItem={renderCart} />
      )}
    </View>
  );
}
