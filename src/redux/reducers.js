import { combineReducers } from "redux";
import userAuth from './auth/reducer'
import cartReducer from './system/reducer'

const rootReducer = combineReducers({
    userAuth,
    cartReducer
})

export default rootReducer