import { combineReducers } from "redux";
import { userReducer } from "./auth/reducer";
import { systemReducer } from "./system/reducer";

export const rootReducer = combineReducers({
    userAuth: userReducer,
    system: systemReducer,
})