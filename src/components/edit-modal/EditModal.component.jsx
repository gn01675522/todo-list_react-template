import React, { useState, useEffect } from "react";
import Button from "../UI/button/Button.component";

import "./editModal.styles.scss";

const EditModal = ({ props }) => {
  const [inputValue, setInputValue] = useState("");
  const { onEditTodo, onCloseModal, todoData } = props;

  const onChangeTodo = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    setInputValue(todoData.content);
  }, []);

  return (
    <div className="edit-modal">
      <div className="edit-modal__head">
        <h1>編輯 Todo</h1>
      </div>
      <div className="edit-modal__body">
        <input
          type="text"
          placeholder="請輸入項目"
          value={inputValue}
          onChange={(e) => onChangeTodo(e)}
        />
      </div>
      <div className="edit-modal__footer">
        <Button
          onClick={() => {
            onEditTodo({ ...todoData, content: inputValue });
            onCloseModal();
          }}
        >
          儲存
        </Button>
        <Button onClick={onCloseModal}>取消</Button>
      </div>
    </div>
  );
};

export default EditModal;
