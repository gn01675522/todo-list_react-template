import { createSelector } from "@reduxjs/toolkit";

const selectTodoReducer = (state) => state.todo;

export const selectTodoList = createSelector(
  [selectTodoReducer],
  (todo) => todo.todoList
);
//* 選擇 reducer 中的 todo-list 狀態

export const selectTempData = createSelector(
  [selectTodoReducer],
  (todo) => todo.tempData
);
//* 選擇 reducer 中的 tempData 狀態

export const selectTodoModalState = createSelector(
  [selectTodoReducer],
  (todo) => todo.isModalOpen
);
//* 選擇 reducer 中的 Modal 狀態

export const selectTodoModalType = createSelector(
  [selectTodoReducer],
  (todo) => todo.modalType
);
//* 選擇 reducer 中的 Modal Type 狀態
