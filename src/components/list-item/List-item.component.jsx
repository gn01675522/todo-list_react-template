import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/button/Button.component";

import { setTodo, setTempData, isModalOpen } from "../../store/todo/todo.slice";
import { selectTodoList } from "../../store/todo/todo.selector";

import "./list-item.styles.scss";

const ListItem = ({ todo }) => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const { id, content, checked } = todo;
  const todoList = useSelector(selectTodoList);

  const openEditModal = () => {
    dispatch(setTempData(todo));
    dispatch(isModalOpen({ type: "edit", isOpen: true }));
  };
  //* 開啟 Edit Modal，並將當前 Todo 放入 TempData 當中

  const onCheckedTodo = () => {
    const todoIndex = todoList.findIndex((item) => item.id === todo.id);
    const newTodos = [...todoList];
    newTodos[todoIndex] = { ...todo, checked: !checked };
    dispatch(setTodo(newTodos));
  };
  //* checked todo 事項，並同時更新 TodoList 狀態

  const onDeleteTodo = () => {
    const newTodo = todoList.filter((item) => item.id !== id);
    dispatch(setTodo(newTodo));
  };
  //* 刪除 todo

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <li className="list">
      <input
        type="checkbox"
        className="list__check"
        checked={isChecked}
        onChange={onCheckedTodo}
      />
      <div className="list__text">
        <span>{content}</span>
      </div>
      <Button onClick={openEditModal}>編輯</Button>
      <Button onClick={() => onDeleteTodo(id)}>刪除</Button>
    </li>
  );
};

export default ListItem;
