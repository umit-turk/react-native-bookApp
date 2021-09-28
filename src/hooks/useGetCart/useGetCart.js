import axios from 'axios';
import { useEffect, useState } from 'react';
import Config from 'react-native-config';
import {useSelector} from 'react-redux';

function useGetCart() {
  const {token} = useSelector(state => state.userAuth.user);
  const [takeCart, setTakeCart] = useState([]);
  console.log("sepet",takeCart)
  console.log("getcart",token)
  
  const getCart = async () => {
    try {
      const {data: responseData} = await axios.get(Config.GET_CART, {
        headers: {Authorization: `Bearer ${token}`},
      });
      console.log("data",responseData.kitaplar)
      setTakeCart(responseData.kitaplar.data);
    } catch (error) {
      console.log('usegetcart',error);
    }
  };
  
  return {getCart, takeCart};
}

export default useGetCart;
