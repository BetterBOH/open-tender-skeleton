import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

const ModalPortal = React.memo(({ children }) => {
  if (!modalRoot) return null;
  return ReactDOM.createPortal(children, modalRoot);
});

export default ModalPortal;
