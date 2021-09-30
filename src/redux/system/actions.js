import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAN_CART,
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  INITIALIZE
} from './actionTypes';

export function addCart(item) {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
}
export function removeFromCart(book_id) {
  return {
    type: REMOVE_FROM_CART,
    payload: book_id,
  };
}
export function cleanCart() {
  return {
    type: CLEAN_CART,
  };
}
export function incrementCounter(book_id) {
  console.log("increment",book_id)
  return {
    type: INCREMENT_COUNT,
    payload: book_id,
  };
}
export function decrementCounter(book_id) {
  return {
    type: DECREMENT_COUNT,
    payload: book_id,
  };
}
export function initialize(init){
  return{
    type: INITIALIZE,
    payload: init
  }
}
