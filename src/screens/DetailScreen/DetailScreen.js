import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import useBookDetail from '../../hooks/useBookDetail/useBookDetail';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import useAddToFavorite from '../../hooks/useAddToFavorites/useAddToFavorities';
import Config from 'react-native-config';

export default function DetailScreen() {
  //redux
  const isLogin = useSelector(state => state.userAuth.isLogin);
  //kullandığımız hookslar
  const {oneBook} = useBookDetail();
  const {data} = oneBook?.kitap_detay || {};
  const {status} = oneBook?.favori || {};
  const {addToFavoritie} = useAddToFavorite();

  const sendFavorities = id => {
    if (!status) {
      addToFavoritie(Config.ADD_TO_FAVORITE, id);
    }
  };

  return (
    <View style={styles.container}>
      <Text>{data?.book_name}</Text>
      <Image
        style={{width: 50, height: 50}}
        source={{
          uri: 'http://192.168.1.43:8080/api/public/book/' + data?.image,
        }}
      />
      {isLogin && (
        <TouchableOpacity onPress={() => sendFavorities(data.id)}>
          <Icon name={'star-o'} />
        </TouchableOpacity>
      )}
      <Text>{data?.pub_year}</Text>
      <Text>{data?.author_name}</Text>
      <Text>{data?.type}</Text>
      <Text>{data?.price}</Text>
      <Text>{data?.description}</Text>
      <Text>{data?.page}</Text>
      <View></View>
    </View>
  );
}
