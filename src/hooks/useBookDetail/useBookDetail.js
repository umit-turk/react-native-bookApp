import {useRoute} from '@react-navigation/native';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Config from 'react-native-config';

function useBookDetail() {
  const route = useRoute();
  const {id} = route.params;

  const [oneBook, setOneBook] = useState(null);

  const eachbook = async (url, book_id) => {
    try {
      const {data: responseData} = await axios.post(url, {book_id});
      setOneBook(responseData.kitap_detay.data);
    } catch (error) {
      console.log('bookdetail post hatası', error);
    }
  };

  useEffect(() => {
    eachbook(Config.BOOK_DETAIL, id);
  }, [id]);

  console.log(oneBook);

  return {oneBook}
}
export default useBookDetail;
