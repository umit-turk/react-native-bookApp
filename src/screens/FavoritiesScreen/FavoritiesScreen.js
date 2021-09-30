import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import Config from 'react-native-config';
import {useDispatch, useSelector} from 'react-redux';
import CustomModel from '../../components/CustomModal/CustomModal';
import useaddToCart from '../../hooks/useaddToCart/useaddToCart';
import useDeleteFavorite from '../../hooks/useDeleteFavorite/useDeleteFavorite';
import useGetFavorities from '../../hooks/useGetFavorities/useGetFavorities';
import {styles} from './styles';


export default function FavoritiesScreen() {
  const navigation = useNavigation();
  const {getFavorities,setGetFavorities ,takeFavorities} = useGetFavorities();
  const {addToCart} = useaddToCart();

  const {remove } = useDeleteFavorite({getFavorities,setGetFavorities});

  //   redux dan alıyoruz
  const dispatch = useDispatch();
  const user = useSelector(state => state.userAuth.user);
  const isLogin = useSelector(state => state.userAuth.isLogin);

  // favoriler sayfası her açıldığında rerender ediyoruz
  useEffect(
    () => navigation.addListener('focus', () => takeFavorities()),
    [user],
  );

 

  const deleteFavorite = book_id => {
    remove(Config.DELETE_FAVORITE, book_id);
  };

  const sendToCart = (item) => {
    addToCart(Config.ADD_TO_CART, item)
  }
  

  const renderFavoritie = ({item}) => {
    return (
      <View>
        <View style={styles.nameimage}>
          <View>
            <Image
              style={styles.image}
              source={{
                uri: 'http://192.168.1.43:8080/api/public/book/' + item.image,
              }}
            />
          </View>
          <View style={styles.namebuton}>
            <Text style={styles.book_name}>{item.book_name}</Text>
            <View style={styles.butongroup}>
            <TouchableOpacity onPress={() => deleteFavorite(item.book_id)}>
              <Text>Kaldır</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => sendToCart(item)} style={styles.ekle}><Text>Ekle</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {!isLogin ? (
        <CustomModel />
      ) : (
        <FlatList data={getFavorities} renderItem={renderFavoritie} />
      )}
    </View>
  );
}
