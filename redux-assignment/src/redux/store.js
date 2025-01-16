import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import { todoReducer } from "./reducer";

const getTodos = async () => {
  const { data } = await axios.get("http://localhost:3000/todos");
  return data;
};

const initState = {
  todo: getTodos() || [],
};

export const store = configureStore({
  reducer: todoReducer,
  preloadedState: initState,
});
