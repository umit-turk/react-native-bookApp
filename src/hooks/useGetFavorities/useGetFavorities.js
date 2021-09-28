import axios from 'axios';
import {useEffect, useState} from 'react';
import Config from 'react-native-config';
import { useSelector } from 'react-redux';

function useGetFavorities() {
  const [getFavorities, setGetFavorities] = useState([]);
  const {token} = useSelector(state => state.userAuth.user)
  const takeFavorities = async () => {
    try {
      const {data: responseData} = await axios({
          method: "GET",
          url: "http://192.168.1.37:8080/api/favorite/favoriteList",
          headers: {
              Authorization: `Bearer ${token}`
          }
      })
      setGetFavorities(responseData.data);
      console.log(getFavorities,"ne bu")
    } catch (error) {
      console.log('getfavorities hatası', error);
    }
  };
  return {getFavorities, setGetFavorities ,takeFavorities};
}
export default useGetFavorities;
