import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import useBookDetail from '../../hooks/useBookDetail/useBookDetail';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import useAddToFavorite from '../../hooks/useAddToFavorites/useAddToFavorities';
import Config from 'react-native-config';

export default function DetailScreen() {
  const isLogin = useSelector(state => state.userAuth.isLogin);
  const {oneBook} = useBookDetail();

  const {addToFavoritie} = useAddToFavorite()

  const sendFavorities = (id) => {
    addToFavoritie(Config.ADD_TO_FAVORITE, id)
  }

  return (
    <View style={styles.container}>
      <Text>{oneBook?.book_name}</Text>
      <Image
        style={{width: 50, height: 50}}
        source={{
          uri: 'http://192.168.1.37:8080/api/public/book/' + oneBook?.image,
        }}
      />
        {isLogin && (
        <TouchableOpacity onPress={() => sendFavorities(oneBook.id)}>
          <Icon name={'star-o'} />
        </TouchableOpacity>
      )}
      <Text>{oneBook?.pub_year}</Text>
      <Text>{oneBook?.author_name}</Text>
      <Text>{oneBook?.type}</Text>
      <Text>{oneBook?.price}</Text>
      <Text>{oneBook?.description}</Text>
      <Text>{oneBook?.page}</Text>
      <View>
        
      </View>
    </View>
  );
}
