import axios from 'axios';
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addCart} from '../../redux/system/actions';

function useaddToCart() {
  const {token} = useSelector(state => state.userAuth.user);
  const dispatch = useDispatch();


  const addToCart = async (url, apiData) => {
    try {
      const {data: responseData} = await axios.post(url, apiData, {
        headers: {Authorization: `Bearer ${token}`},
      });
      console.log('response', responseData);
      // if (reponseData.sepet.status) {
        //dispatch(addCart({item}))
      // }
    } catch (error) {
      console.log('add to cart hatası', error);
    }
  };
  return {addToCart};
}

export default useaddToCart;
