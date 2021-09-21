import { USER_LOGOUT , SET_USER } from "./actionTypes";

const initialState = {
   person : {},
   isLogin: false,
}


export function systemReducer(state = initialState, action){

    switch (action.type) {
        case SET_USER:
           return{
               ...state, isLogin:true, person: action.payload.person
           }
           case USER_LOGOUT:
               return {
                   ...state, isLogin: false, person: {}
               }
        default:
            return state
    }
}