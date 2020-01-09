import { combineReducers } from "redux"
import { todoReducer } from "./reducers/todoReducder"

export default combineReducers({
  todos: todoReducer
});
