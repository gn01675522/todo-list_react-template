import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
  modalType: null,
  tempData: {},
  isModalOpen: false,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodo: (state, action) => {
      state.todoList = action.payload;
    },
    //* 對 Todo 做更新

    setTempData: (state, action) => {
      state.tempData = action.payload;
    },
    //* 對 tempData 做更新

    isModalOpen: (state, action) => {
      const { type, isOpen } = action.payload;
      state.modalType = type;
      state.isModalOpen = isOpen;
    },
    //* 更新 Modal 狀態
  },
});

export const { setTodo, setTempData, isModalOpen } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
