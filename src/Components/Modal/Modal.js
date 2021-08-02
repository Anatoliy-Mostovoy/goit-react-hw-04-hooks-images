import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ closeModal, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      closeModal();
    }
  };

  const handleCloseModal = event => {
    const { currentTarget, target } = event;
    if (currentTarget === target) {
      closeModal();
    }
  };

  return createPortal(
    <div className={s.Overlay} onClick={handleCloseModal}>
      <div className={s.Modal}>{children}</div>
    </div>,
    modalRoot,
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
