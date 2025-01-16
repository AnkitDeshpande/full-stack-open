import { ADD_TODO, DELETE_TODO, UPDATE_STATUS } from "./actionType";

export const todoReducer = (store, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return { ...store, todos: [...store.todos, payload] };
    case UPDATE_STATUS:
      return {
        ...store,
        todos: store.todos.map((todo) => {
          return todo.id === payload ? (todo.status = !todo.status) : todo;
        }),
      };
    case DELETE_TODO:
      return {
        ...store,
        todos: store.todos.filter((todo) => todo.id !== payload),
      };
    default:
      store;
  }
};
