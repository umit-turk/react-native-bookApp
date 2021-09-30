import {useRoute} from '@react-navigation/native';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Config from 'react-native-config';
import { useSelector } from 'react-redux';

function useBookDetail() {
  //route react navigationdan aldık.
  const route = useRoute();
  const {id} = route.params;

  //reduxdan gelen token
  const {token} = useSelector(state =>state.userAuth.user)

  //bookDetailde kullandık.
  const [oneBook, setOneBook] = useState(null);

  const eachbook = async (url, book_id) => {
    try {
      const {data: responseData} = await axios.post(
        url,
        {book_id},
        {headers: {Authorization: `Bearer ${token}`}},
      );
      setOneBook(responseData);
    } catch (error) {
      console.log('bookdetail post hatası', error);
    }
  };

  useEffect(() => {
    eachbook(Config.BOOK_DETAIL, id);
  }, [id]);

  return {oneBook};
}
export default useBookDetail;
