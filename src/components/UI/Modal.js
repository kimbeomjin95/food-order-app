import React, { Fragment } from 'react';
import classes from './Modal.module.css';
import ReactDom from 'react-dom';
// 배경
const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = props => {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = props => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement,
      )}
      */}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement,
      )}
    </Fragment>
  );
};

export default Modal;
