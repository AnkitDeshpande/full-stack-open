import { ADD_TODO, DELETE_TODO, UPDATE_STATUS } from "./actionType";

export const addTodo = (payload) => {
   return {
      type: ADD_TODO,
      payload,
   };
};

export const updateStatus = (payload) => {
   return {
      type: UPDATE_STATUS,
      payload,
   };
};

export const deleteTodo = (payload) => {
   return {
      type: DELETE_TODO,
      payload,
   };
};
