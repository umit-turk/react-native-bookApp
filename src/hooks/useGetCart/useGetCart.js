import axios from 'axios';
import {useEffect, useState} from 'react';
import Config from 'react-native-config';
import {useDispatch, useSelector} from 'react-redux';
import {initialize} from '../../redux/system/actions';

/*
carttan silme işlemi için servere post request yapıyoruz sonra bu sildiklerimizi get metodu ile alıyoruz
 ve redux da cart'a dispatch ediyoruz ardından cartscreen deki flatlist de data kısmına cart yazıyoruz.
*/

function useGetCart() {
  const {token} = useSelector(state => state.userAuth.user);
  const dispatch = useDispatch();

  const getCart = async () => {
    try {
      const {data: responseData} = await axios.get(Config.GET_CART, {
        headers: {Authorization: `Bearer ${token}`},
      });
      console.log('response', responseData);
      dispatch(initialize({init: responseData.kitaplar.data}));
    } catch (error) {
      console.log('usegetcart', error);
    }
  };

  return {getCart};
}

export default useGetCart;
