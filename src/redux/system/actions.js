import { ADD_TO_CART, REMOVE_FROM_CART, CLEAN_CART } from "./actionTypes";

export function addCart(item){
    return {
        type: ADD_TO_CART,
        payload: item
    }
}
export function removeFromCart(item){
    return{
        type: REMOVE_FROM_CART,
        payload: item
    }
}
export function cleanCart(){
    return{
        type: CLEAN_CART,
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