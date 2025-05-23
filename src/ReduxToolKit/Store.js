import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import Auth from "../Page/Auth/Auth";
import authReducer from "./AuthSlice";

const rootReducer = combineReducers({
    auth: authReducer

});

const store = configureStore({
  reducer:rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk)
})

export default store;