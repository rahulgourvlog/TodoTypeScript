import { combineReducers } from "redux";
import { todoreducer } from "./todoreducer";


export const rootReducer:any=combineReducers({
    todos:todoreducer
})