import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';


function Modal({ onClose, children }) {
  let modalRoot: any;
  if (typeof window !== 'undefined') {
     modalRoot = document.querySelector('#modal-root');
  }
  
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
export default Modal;