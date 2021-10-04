import axios from 'axios';
import {useSelector} from 'react-redux';

function useDeleteFavorite({getFavorities, setGetFavorities}) {
  //redux
  const {token} = useSelector(state => state.userAuth.user);

  const remove = async (url, book_id) => {
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
      if (responseData?.success) {
        const filtered = getFavorities.filter(item => item.book_id !== book_id);
        setGetFavorities(filtered);
      }
    } catch (error) {
      console.log('deletefav hatası', error);
    }
  };
  return {remove};
}

export default useDeleteFavorite;
