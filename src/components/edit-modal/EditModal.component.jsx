import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/button/Button.component";

import { setTodo, isModalOpen } from "../../store/todo/todo.slice";
import { selectTodoList, selectTempData } from "../../store/todo/todo.selector";

import "./editModal.styles.scss";

const EditModal = () => {
  const [inputValue, setInputValue] = useState("");
  const todoList = useSelector(selectTodoList);
  const tempData = useSelector(selectTempData);
  const dispatch = useDispatch();

  const onChangeTodo = (e) => {
    setInputValue(e.target.value);
  };
  //* 將 user 輸入的 input 給存起來

  const onEditTodo = () => {
    const targetIndex = todoList.findIndex((item) => item.id === tempData.id);
    const newTodos = [...todoList];
    newTodos[targetIndex] = { ...tempData, content: inputValue };

    dispatch(setTodo(newTodos));
    dispatch(isModalOpen({ isOpen: false }));
  };
  //* 編輯 todo

  const onCloseModal = () => {
    dispatch(isModalOpen({ isOpen: false }));
  };
  //* 關閉 Modal

  useEffect(() => {
    setInputValue(tempData.content);
  }, [tempData]);

  return (
    <div className="edit-modal">
      <div className="edit-modal__head">
        <h1>編輯 Todo</h1>
      </div>
      <div className="edit-modal__body">
        <input
          type="text"
          placeholder="請輸入項目"
          defaultValue={inputValue}
          onChange={(e) => onChangeTodo(e)}
        />
      </div>
      <div className="edit-modal__footer">
        <Button onClick={onEditTodo}>儲存</Button>
        <Button onClick={onCloseModal}>取消</Button>
      </div>
    </div>
  );
};

export default EditModal;
