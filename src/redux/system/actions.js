import { SET_USER , USER_LOGOUT} from "../auth/actionTypes";

export function setUser(data){
    return {
        type: SET_USER,
        payload: data
    }
}
export function userLogout(){
    return {
        type: USER_LOGOUT,
    }
}


// import { ADD_NAME, CLEAN_LIST, ADD_PASSWORD, CLEAN_PASSWORD } from "./actionTypes";

// export function addName(name){
//     return {
//         type: ADD_NAME,
//         payload: name,
//     }
// }
// export function addPassword(password){
//     return{
//         type: ADD_PASSWORD,
//         payload: password,
//     }
// }
// export function cleanPassword(){
//     return {
//         type: CLEAN_PASSWORD
//     }
// }

// export function cleanList(){
//     return {
//         type: CLEAN_LIST,
//     }
// }

// const handledd = () => {
//     dispatch(addName({name:text}))
//   }

//   const passwordAdd = () => {
//       dispatch(addPassword({password: password}))
//   }

//   const list = useSelector(state => state.system.list)
//   const nameList = useSelector(state => state.system.nameList)
//     const dispatch = useDispatch();

//     const removeAll = () => {
//         dispatch(cleanList())
//     }
//     const removePassword = () => {
//         dispatch(cleanPassword())
//     }