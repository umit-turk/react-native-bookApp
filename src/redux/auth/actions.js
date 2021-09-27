import { SET_USER, USER_LOGOUT } from "./actionTypes";

export function setUser(user){
    return {
        type: SET_USER,
        payload: user
    }
}

export function userLogout(){
    return {
        type: USER_LOGOUT
    }
}