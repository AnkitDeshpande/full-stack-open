import { ADD_TODO, DELETE_TODO, SET_TODOS, SORT, UPDATE_STATUS } from "./actionType";

export const setTodos = (data) => {
   return {
      type: SET_TODOS,
      payload: data,
   };
};

export const addTodo = (data) => {
   return {
      type: ADD_TODO,
      payload: data,
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


export const getTodos = () => async (dispatch) => {
   const data = await fetch("http://localhost:3000/todos")
      .then((res) => res.json());

   return dispatch(setTodos(data));
};

export const sortTodos = (by) => {
   return {
      type: SORT,
      payload: by
   };
};