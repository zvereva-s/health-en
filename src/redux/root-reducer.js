import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";

import authReducer from 'redux/auth/auth-slice';
import dailyReducer from 'redux/daily/daily-slice';


const persistConfig = {
    key: 'token',
    storage,
    whitelist: ['token'],
}

const persistAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
    auth: persistAuthReducer, 
    dayli: dailyReducer,
})

export default rootReducer;