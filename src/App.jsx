import React from "react";
import { useDispatch, useSelector } from "react-redux";

import ListItem from "./components/list-item/List-item.component";
import Button from "./components/UI/button/Button.component";
import Modal from "./components/modal/Modal.component";

import { isModalOpen } from "./store/todo/todo.slice";
import {
  selectTodoList,
  selectTodoModalState,
} from "./store/todo/todo.selector";

import "./App.scss";

const App = () => {
  const todoList = useSelector(selectTodoList);
  const modalState = useSelector(selectTodoModalState);
  const dispatch = useDispatch();

  const openCreateModal = () => {
    dispatch(isModalOpen({ isOpen: true, type: "create" }));
  };
  //* 打開 create modal

  return (
    <>
      {modalState && <Modal />}
      <div className="todo-list">
        <div className="todo-list__content">
          <div className="todo-list__content-create">
            <Button onClick={openCreateModal}>新增</Button>
          </div>
          <ul className="todo-list__group">
            {todoList.map((todo) => (
              <ListItem key={todo.id} todo={todo} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
