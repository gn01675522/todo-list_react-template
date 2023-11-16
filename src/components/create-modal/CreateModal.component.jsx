import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../UI/button/Button.component";

import { setTodo, isModalOpen } from "../../store/todo/todo.slice";
import { selectTodoList } from "../../store/todo/todo.selector";

import { generalNumberForId } from "../../utils/common.utils";

import "./createModal.styles.scss";

const CreateModal = () => {
  const [inputValue, setInputValue] = useState("");
  const todoList = useSelector(selectTodoList);
  const dispatch = useDispatch();

  const onCloseModal = () => dispatch(isModalOpen({ isOpen: false }));

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };
  //* 將 input 內容放入 state 當中

  const onCreateTodo = () => {
    const newTodo = {
      id: generalNumberForId(todoList),
      content: inputValue,
      checked: false,
    };

    dispatch(setTodo([...todoList, newTodo]));

    dispatch(isModalOpen(false));
  };
  //* 創建新 todo

  return (
    <div className="create-modal">
      <div className="create-modal__head">
        <h1>新增 Todo</h1>
      </div>
      <div className="create-modal__body">
        <input
          type="text"
          placeholder="請輸入項目"
          value={inputValue}
          onChange={onChangeInput}
        />
      </div>
      <div className="create-modal__footer">
        <Button onClick={() => onCreateTodo(inputValue)}>儲存</Button>
        <Button onClick={onCloseModal}>取消</Button>
      </div>
    </div>
  );
};

export default CreateModal;
