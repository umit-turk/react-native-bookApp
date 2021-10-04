import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import Config from 'react-native-config';
import useBookDetail from '../../hooks/useBookDetail/useBookDetail';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import useAddToFavorite from '../../hooks/useAddToFavorites/useAddToFavorities';
import {useSelector} from 'react-redux';
import {styles} from './styles';

export default function DetailScreen() {
  //redux
  const isLogin = useSelector(state => state.userAuth.isLogin);
  //kullandığımız hookslar
  const {oneBook} = useBookDetail();
  const {data} = oneBook?.kitap_detay || {};
  const {status} = oneBook?.favori || {};
  const {addToFavoritie} = useAddToFavorite();

  //star icon
  const [favorite, setFavorite] = useState(false);

//favoriye ekleme işleminde elimizdeki ürünün serverdeki değeri false ise ekleme işlemi yapabiliriz.
 //favori false ise setfavoriteyi true yap ve addtofavorite işlemini yap.
  const sendFavorities = id => {
    if (!favorite) {
      setFavorite(true)
      addToFavoritie(Config.ADD_TO_FAVORITE, id);
    }
  };

//status her update olduğunda status undefined'a eşit değilse setfavoriteyi serverdeki değeri ata.
  useEffect(() => {
    if(status !== undefined){
      setFavorite(status)
    }
  },[status])

  return (
    <View style={styles.container}>
      <View style={styles.imageandothers}>
        <View style={styles.imageview}>
          <Image
            style={styles.image}
            source={{
              uri: 'http://192.168.1.43:8080/api/public/book/' + data?.image,
            }}
          />
        </View>
        <View style={styles.bookinfo}>
          <Text style={styles.book_name}>{data?.book_name}</Text>
          <Text style={styles.author}>{data?.author_name}</Text>
          <Text style={styles.pub_year}>{data?.pub_year}</Text>
          
      <Text style={styles.page}>Sayfa sayısı: {data?.page}</Text>
      {isLogin && (
            <View >
              <View style={styles.favbtn}>
              <Text style={styles.favoriText}>Favorilerime Ekle</Text>
              <TouchableOpacity disabled={favorite} onPress={() => sendFavorities(data.id)}>
              <Icon size={20}  name={favorite ? "star" : 'star-o'} />
              </TouchableOpacity>
              </View>
            </View>
          )}
      <Text style={styles.price}>{data?.price}</Text>
        </View>
      </View>
      <Text style={styles.type}>{data?.type}</Text>
      <Text style={styles.description}>{data?.description}</Text>
      <View></View>
    </View>
  );
}
