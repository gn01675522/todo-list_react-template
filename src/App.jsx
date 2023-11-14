import React, { useState } from "react";

import ListItem from "./components/list-item/List-item.component";
import Button from "./components/UI/button/Button.component";
import Modal from "./components/modal/Modal.component";

import { generalNumberForId } from "./utils/common.utils";

import "./App.scss";

const defaultData = [
  { id: `${Math.random()}`, content: "learn something", checked: false },
];

const App = () => {
  const [todos, setTodos] = useState(defaultData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const openCreateModal = () => {
    setModalType("create");
    setIsModalOpen(!isModalOpen);
  };
  //* 打開 create modal

  const onCreateTodo = (content) => {
    const newTodo = {
      id: generalNumberForId(todos),
      content: content,
      checked: false,
    };
    setTodos((prev) => {
      return [...prev, newTodo];
    });
    setIsModalOpen(false);
  };
  //* 創建新 todo

  const onEditTodo = (content) => {
    setTodos((prev) => {
      const targetIndex = prev.findIndex((item) => item.id === content.id);
      const newTodos = [...prev];
      newTodos[targetIndex] = content;
      return newTodos;
    });
  };
  //* 編輯 todo

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  const onDeleteTodo = (id) => {
    setTodos((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };
  //* 刪除 todo

  return (
    <>
      {isModalOpen && (
        <Modal
          type={modalType}
          onCreateTodo={onCreateTodo}
          onCloseModal={onCloseModal}
        />
      )}
      <div className="todo-list">
        <div className="todo-list__content">
          <div className="todo-list__content-create">
            <Button onClick={openCreateModal}>新增</Button>
          </div>
          <ul className="todo-list__group">
            {todos.map((todo) => (
              <ListItem
                key={todo.id}
                todo={todo}
                setTodos={setTodos}
                onDeleteTodo={onDeleteTodo}
                onEditTodo={onEditTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
