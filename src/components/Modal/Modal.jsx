import React from 'react';
import { ModalContainer, ModalContent } from './Modal.styled';

const Modal = ({ onClose, children }) => {
  const handleCloseModal = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalContainer onClick={handleCloseModal}>
      <ModalContent>{children}</ModalContent>
    </ModalContainer>
  );
};

export default Modal;
