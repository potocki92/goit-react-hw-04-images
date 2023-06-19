import React, { useEffect } from 'react';
import { ModalContainer, ModalContent } from './Modal.styled';

const Modal = ({ onClose, children }) => {
  const handleCloseModal = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const closeModalOnEsc = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
  
    window.addEventListener('keydown', closeModalOnEsc);

    return () => {
      window.removeEventListener('keydown', closeModalOnEsc);
    };
  }, [onClose]);
  
  return (
    <ModalContainer onClick={handleCloseModal}>
      <ModalContent>{children}</ModalContent>
    </ModalContainer>
  );
};

export default Modal;
