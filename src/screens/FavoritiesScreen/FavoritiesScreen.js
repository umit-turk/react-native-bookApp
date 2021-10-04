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
  //react navigation dan gelen hook
  const navigation = useNavigation();

  //hookslardan aldıklarımız
  const {getFavorities,setGetFavorities ,takeFavorities} = useGetFavorities();
  const {addToCart} = useaddToCart();
  const {remove } = useDeleteFavorite({getFavorities,setGetFavorities});

  //   redux dan alıyoruz
  const dispatch = useDispatch();
  const user = useSelector(state => state.userAuth.user);
  const isLogin = useSelector(state => state.userAuth.isLogin);

  // favoriler sayfası her açıldığında re-render ediyoruz
  useEffect(
    () => navigation.addListener('focus', () => takeFavorities()),
    [user],
  );

 
//favorileri silmek için kullanıyoruz
  const deleteFavorite = book_id => {
    remove(Config.DELETE_FAVORITE, book_id);
  };

  //cart'a eklemek için kullanıyoruz
  const sendToCart = (item) => {
    addToCart(Config.ADD_TO_CART, item)
  }
  
//flatlistdeki renderItem'a atıyoruz
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
            <TouchableOpacity style={styles.favbtn} onPress={() => deleteFavorite(item.book_id)}>
              <Text style={styles.textfavori}>Favorilerden kaldır</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => sendToCart(item)} style={styles.ekle}><Text style={styles.textsepet}>Sepete Ekle</Text></TouchableOpacity>
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
