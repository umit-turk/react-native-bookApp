import axios from 'axios';
import {useState} from 'react';
import Config from 'react-native-config';
import { useSelector } from 'react-redux';

function useDeleteFavorite({getFavorities,setGetFavorities}) {
  const {token} = useSelector(state => state.userAuth.user);
  

  const remove = async (url, book_id) => {
    console.log(token)
    try {
      const {data: responseData} = await axios.post(
        url,
        {book_id},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if(responseData?.success){
      const filtered = getFavorities.filter(item => item.book_id !== book_id)
      setGetFavorities(filtered)
      }
      console.log("silin",responseData)
    } catch (error) {
      console.log('deletefav hatası', error);
    }
  };
  return {remove}
}

export default useDeleteFavorite;
