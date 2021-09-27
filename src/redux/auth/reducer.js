import {USER_LOGOUT, SET_USER} from './actionTypes';

const initialState = {
  user: {},
  isLogin: false,
};

export function userReducer(state = initialState, action) {
  console.log("redux token",state.user)
  switch (action.type) {
    case SET_USER:
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
