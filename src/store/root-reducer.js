import { combineReducers } from "@reduxjs/toolkit";

import { todoReducer } from "./todo/todo.slice";

export const rootReducer = combineReducers({
  todo: todoReducer,
});
