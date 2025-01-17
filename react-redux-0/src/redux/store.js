import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reducer";

const initState = {
    counter: 0,
    todos: []
}
export const store = configureStore({ reducer: counterReducer, preloadedState: initState });

store.subscribe(() => {
    console.log("subscribe :", store.getState())
}); 