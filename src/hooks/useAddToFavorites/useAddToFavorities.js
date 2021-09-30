import {useState, useEffect} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';

function useAddToFavorite() {
  const {token} = useSelector(state => state.userAuth.user);
  const [favorite, setFavorite] = useState();

  const addToFavoritie = async (url, book_id) => {
    try {
      const {data: responseData} = await axios.post(
        url,
        {book_id},
        {headers: {Authorization: `Bearer ${token}`}},
        );
        console.log(book_id)
        setFavorite(responseData);
        console.log(responseData)
    } catch (error) {
      console.log('favori ekleme hatası', error);
    }
  };

  return {favorite, addToFavoritie};
}

export default useAddToFavorite;
