import {ADD_TO_CART, REMOVE_FROM_CART, CLEAN_CART} from './actionTypes';
const initialState = {
  cart: [],
};

export function systemReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      console.log('redux', state.cart);
      return {
        ...state,
        cart: [...state.cart, action.payload.item]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(book_id => book_id !== action.payload.id),
      };
    case CLEAN_CART:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
