import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot: any = document.querySelector('#modal-root');

function Modal({ onClose, children }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
      console.log('aa');
    }
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className='modal__overlay' onClick={handleBackdropClick}>
      <div className='modal__container'>{children}</div>
    </div>,
    modalRoot,
  );
}
Modal.propTypes = {
  children: PropTypes.object.isRequired,
};
export default Modal;