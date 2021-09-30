import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAN_CART,
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  INITIALIZE,
} from './actionTypes';
const initialState = {
  cart: [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const book_item = state.cart.find(item => item.book_id===action.payload.item.book_id)
      if(book_item){
        return state
      }
      return {
        ...state,
        cart: [...state.cart, action.payload.item],
      };
    case INITIALIZE:
      return {
        cart: action.payload.init,
      };
    case REMOVE_FROM_CART:
      
      return {
        ...state,
        cart: state.cart.filter(
          book => book.book_id !== action.payload.book_id,
        ),
      };
    case INCREMENT_COUNT:
      console.log("cart",state.cart)
      /* state'nin kopyasını al , statedeki cart'ı map ile döndür ve item book id ile action.payload dan gelen eşitse,
       item'ın kopyasını al üzeine item.adet'i bir arttırark ekle diğer türlü direk item'ı dön */ 
      return {
        ...state,
        cart: state.cart.map(item =>
          item.book_id === action.payload ? {...item, adet: item.adet + 1} : item,
        ),
      };
    case DECREMENT_COUNT:
      console.log("cartımız",state.cart);
      
      if (state.cart < 0) {
        return state;
      }
      return {
        ...state,
        cart: state.cart.map(item =>
          item.book_id === action.payload ? {...item, adet: item.adet - 1} : item,
        ),
      };
    case CLEAN_CART:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
