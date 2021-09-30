import axios from 'axios';
import {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';

function useGetFavorities() {
  const [getFavorities, setGetFavorities] = useState([]);
  const {token} = useSelector(state => state.userAuth.user)
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
    } catch (error) {
      console.log('getfavorities hatası', error);
    }
  };
  return {getFavorities, setGetFavorities ,takeFavorities};
}
export default useGetFavorities;
