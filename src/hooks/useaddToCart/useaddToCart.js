import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {addCart, incrementCounter} from '../../redux/system/actions';

/*
redux cart'a post request işlemi yapıyouz, adet sayısını 1 olarak veriyoruz.
*/

function useaddToCart() {
  
  //redux
  const {token} = useSelector(state => state.userAuth.user);
  const dispatch = useDispatch();
  
  const addToCart = async (url, item,adet=1,callback) => {
    console.log("item burada",item,adet);
    try {
      const {data: responseData} = await axios.post(
        url,
        [{book_id: item.book_id, adet}],
        {
          headers: {Authorization: `Bearer ${token}`},
        },
      );
      // status durumum true ise aşağıdaki işlemleri yap.
      if (responseData.sepet.status) {
        if(adet === 1) {
          dispatch(addCart({item, adet}));
        }
        callback && callback()  
      }
     
    
      console.log(dispatch(addCart({item, adet})))
    } catch (error) {
      console.log('add to cart hatası', error);
    }
  };
  return {addToCart};
}

export default useaddToCart;
