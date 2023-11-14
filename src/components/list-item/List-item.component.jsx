import React, { useState, useEffect } from "react";
import Button from "../UI/button/Button.component";
import Modal from "../modal/Modal.component";

import "./list-item.styles.scss";

const ListItem = ({ todo, setTodos, onEditTodo, onDeleteTodo }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const { id, content, checked } = todo;

  const openEditModal = () => {
    setModalType("edit");
    setIsModalOpen(!isModalOpen);
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <>
      {isModalOpen && (
        <Modal
          setTodos={setTodos}
          onEditTodo={onEditTodo}
          type={modalType}
          todoData={todo}
          onCloseModal={onCloseModal}
        />
      )}
      <li className="list">
        <input
          type="checkbox"
          className="list__check"
          checked={isChecked}
          onChange={() => onEditTodo({ ...todo, checked: !isChecked })}
        />
        <div className="list__text">
          <span>{content}</span>
        </div>
        <Button onClick={openEditModal}>編輯</Button>
        <Button onClick={() => onDeleteTodo(id)}>刪除</Button>
      </li>
    </>
  );
};

export default ListItem;
