import { useSelector } from "react-redux";
import { createPortal } from "react-dom";

import Backdrop from "./Backdrop.component";
import CreateModal from "../create-modal/CreateModal.component";
import EditModal from "../edit-modal/EditModal.component";

import { selectTodoModalType } from "../../store/todo/todo.selector";

const portalElement = document.getElementById("overlays");

const MODAL_TYPE = {
  create: "create",
  edit: "edit",
};

const whichModal = (type, props) =>
  ({
    [MODAL_TYPE.create]: <CreateModal props={props} />,
    [MODAL_TYPE.edit]: <EditModal props={props} />,
  }[type]);

const Modal = ({ ...otherProps }) => {
  const type = useSelector(selectTodoModalType);
  const modal = whichModal(type, otherProps);

  return <>{createPortal(<Backdrop>{modal}</Backdrop>, portalElement)}</>;
};

export default Modal;
