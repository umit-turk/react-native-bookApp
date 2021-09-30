import axios from 'axios';
import {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';

function useGetFavorities() {
  //redux
  const {token} = useSelector(state => state.userAuth.user)

  //state
  const [getFavorities, setGetFavorities] = useState([]);
  
  const takeFavorities = async () => {
    try {
      const {data: responseData} = await axios({
          method: "GET",
          url: "http://192.168.1.43:8080/api/favorite/favoriteList",
          headers: {
              Authorization: `Bearer ${token}`
          }
      })
      setGetFavorities(responseData.data);
      console.log(getFavorities)
    } catch (error) {
      console.log('getfavorities hatası', error);
    }
  };
  return {getFavorities, setGetFavorities ,takeFavorities};
}
export default useGetFavorities;
