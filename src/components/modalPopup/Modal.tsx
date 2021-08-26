import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";

interface Props {
  closeModal: ()=> void;
}

const Backdrop: React.FC<Props> = ({closeModal}) => {
  return <div className="backdrop" onClick={()=>closeModal()}/>;
};

const ModalOverlay: React.FC = ({ children }) => {
  return (
    <div className="modal">
      <div className="content">{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays") as HTMLElement;


const Modal: React.FC<Props> = ({closeModal, children}) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop closeModal={closeModal}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;