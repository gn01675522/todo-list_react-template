import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
  isModalOpen: false,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodo: (state, action) => {
      state.todoList.concat(action.payload);
    },
    isModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
  },
});

export const { setTodo, isModalOpen } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
