import axios from 'axios';
import {useEffect, useState} from 'react';
import Config from 'react-native-config';
import { useSelector } from 'react-redux';

function useGetFavorities() {
  const [getFavorities, setGetFavorities] = useState([]);
  const {token} = useSelector(state => state.userAuth.user)
    console.log("token gel",token)
  const takeFavorities = async () => {
    try {
      console.log('nesin sen', Config.GET_FAVORITIES);
      const {data: responseData} = await axios({
          method: "GET",
          url: "http://192.168.1.37:8080/api/favorite/favoriteList",
          headers: {
              Authorization: `Bearer ${token}`
          }
      })
      console.log("get",responseData)
      setGetFavorities(responseData.data);
    } catch (error) {
      console.log('getfavorities hatası', error);
    }
  };
  return {getFavorities, setGetFavorities ,takeFavorities};
}
export default useGetFavorities;
