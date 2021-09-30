import {USER_LOGOUT, SET_USER} from './actionTypes';

const initialState = {
  user: {},
  isLogin: false,
};

export default function userAuth(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      console.log("auth",state)
      return {
        ...state,
        isLogin: true,
        user: action.payload.user,
      };
    case USER_LOGOUT:
      return {
        ...initialState
      };
    default:
      return state;
  }
}
