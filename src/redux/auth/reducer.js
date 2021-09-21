import {USER_LOGOUT, SET_USER} from './actionTypes';

const initialState = {
  userInfo: {},
  isLogin: false,
  token: '',
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isLogin: true,
        userInfo: action.payload,
      };
    case USER_LOGOUT:
      return {
        ...state,
        isLogin: false,
        token: '',
        userInfo: {},
      };
    default:
      return state;
  }
}
