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
      return {
        ...state,
        cart: [...state.cart, action.payload.item],
      };
    case INITIALIZE:
      return {
        cart: action.payload.init,
      };
    case REMOVE_FROM_CART:
      console.log(
        'reducer remove',
        state.cart,
        'payload id',
        action.payload.book_id,
      );
      return {
        ...state,
        cart: state.cart.filter(
          book => book.book_id !== action.payload.book_id,
        ),
      };
    case INCREMENT_COUNT:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.book_id === book_id ? {...item, adet: item.adet + 1} : item,
        ),
      };
    case DECREMENT_COUNT:
      if (DECREMENT_COUNT < 0) {
        return state;
      }
      return {
        ...state,
        cart: state.cart.map(item =>
          item.book_id === book_id ? {...item, adet: item.adet - 1} : item,
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
