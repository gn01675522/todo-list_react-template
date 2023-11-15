import { combineReducers } from "@reduxjs/toolkit";

import { todoReducer } from "./todo/todo.reducer";

export const rootReducer = combineReducers({
  todo: todoReducer,
});
