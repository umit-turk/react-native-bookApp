import {useState, useEffect} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';

function useAddToFavorite() {
  const {token} = useSelector(state => state.userAuth.user);
  console.log('token', token);
  const [favorite, setFavorite] = useState();

  const addToFavoritie = async (url, book_id) => {
    try {
      console.log('url', url);
      console.log('book_id', book_id);
      const {data: responseData} = await axios.post(
        url,
        {book_id: book_id.id},
        {headers: {Authorization: `Bearer ${token}`}},
      );
      setFavorite(responseData);
      console.log('herhangi birşey');
    } catch (error) {
      console.log('favori ekleme hatası', error);
    }
  };

  console.log(favorite);
  return {favorite, addToFavoritie};
}

export default useAddToFavorite;
