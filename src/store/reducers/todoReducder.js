import { ADD_TODO, DELETE_TODO } from "../actions/todoAction";

export function todoReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      //write here logic
      break;
    default:
      return state;
  }
}
