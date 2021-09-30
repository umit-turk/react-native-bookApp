import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {addCart} from '../../redux/system/actions';

function useaddToCart() {
  const {token} = useSelector(state => state.userAuth.user);
  const dispatch = useDispatch();
  


  const addToCart = async (url, item) => {

    try {
      const {data: responseData} = await axios.post(url,[{book_id:item.book_id, adet:1}], {
        headers: {Authorization: `Bearer ${token}`},
      });
      if(responseData.sepet.status){
        dispatch(addCart({item,adet:1}))
      }
      console.log("cevap",responseData)
    } catch (error) {
      console.log('add to cart hatası', error);
    }
  };
  return {addToCart};
}

export default useaddToCart;
