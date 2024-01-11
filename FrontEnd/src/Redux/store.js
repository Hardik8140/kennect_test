import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as postReducer } from "./reducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({ postReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
