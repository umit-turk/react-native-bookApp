import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {removeFromCart} from '../../redux/system/actions';

function useDeleteCart() {
  //redux
  const {token} = useSelector(state => state.userAuth.user);
  const dispatch = useDispatch();

  const deleteItem = async (url, book_id) => {
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
        dispatch(removeFromCart({book_id}));
      }
    } catch (error) {
      console.log('deleteItemerror', error);
    }
  };
  return {deleteItem};
}

export default useDeleteCart;
