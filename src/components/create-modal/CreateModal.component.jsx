import React, { useState } from "react";
import Button from "../UI/button/Button.component";

import { generalNumberForId } from "../../utils/common.utils";

import "./createModal.styles.scss";

const CreateModal = ({ props }) => {
  const [inputValue, setInputValue] = useState("");

  const { onCreateTodo, onCloseModal } = props;

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };
  //* 將 input 內容放入 state 當中

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
