import { ADD_TODO, DELETE_TODO, SET_TODOS, UPDATE_STATUS } from "./actionType";


const initialState = [];

export const todoReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_TODOS:
         console.log(action.payload);
         return action.payload;
      case ADD_TODO:
         return [...state, action.payload];
      case DELETE_TODO:
         return state.filter((todo) => todo.id !== action.payload);
      case UPDATE_STATUS:
         return state.map((todo) =>
            todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
         );
      default:
         return state;
   }
};

