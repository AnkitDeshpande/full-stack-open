import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { todoReducer } from "./reducer";

const rootReducer = combineReducers({
	todos: todoReducer
})

// const myMiddleware = (store) => (next) => (action) => {
// 	if (typeof action === 'function') {
// 		return action(store.dispatch);
// 	}
// 	next(action);
// }

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(thunk),
});