import React from 'react';
import ReactDOM from 'react-dom';
import './MModal.css';

const MModal = ({ isOpen, toggle, modalComponent }) => isOpen ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-wrapper">
      <div className="modal-backdrop" aria-modal aria-hidden tabIndex={-1} role="dialog" onClick={toggle} />
      <div className="modal-box">
        <i className="far fa-times-circle fa-3x" onClick={toggle}></i>
        <div className="modal-content">{modalComponent}</div>
      </div>
    </div>
  </React.Fragment>, document.getElementById('modal-root')
) : null;

export default MModal;