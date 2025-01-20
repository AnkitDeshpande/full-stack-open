import { ADD_TODO, DELETE_TODO, SET_TODOS, SORT, UPDATE_STATUS } from "./actionType";

const initialState = { todos: [], loading: false, error: false };

export const todoReducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case SET_TODOS:
         console.log(payload);
         return {
            ...state,
            todos: Array.isArray(payload) ? payload : state.todos,
            loading: false,
            error: false,
         };

      case ADD_TODO:
         return {
            ...state,
            todos: [...state.todos, payload],
         };

      case DELETE_TODO:
         return {
            ...state,
            todos: state.todos.filter((todo) => todo.id !== payload),
         };

      case UPDATE_STATUS:
         return {
            ...state,
            todos: state.todos.map((todo) =>
               todo.id === payload ? { ...todo, completed: !todo.completed } : todo
            ),
         };

      case SORT:
         return {
            ...state,
            todos: [...state.todos].sort((a, b) => a[payload] > b[payload]
               ? 1
               : a[payload] < b[payload]
                  ? -1
                  : 0)
         }

      default:
         return state;
   }
};
