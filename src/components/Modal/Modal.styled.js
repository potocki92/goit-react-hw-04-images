import styled from 'styled-components';

export const ModalContainer = styled.div`
  opacity: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.85);
  transition: all 0.3s ease;
  z-index: 99;

  &.show {
    opacity: 0;
    transition: all 0.3s ease;
  }
`;

export const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 90%;
  transform: translate(-50%, -50%);
  border: none;
  overflow: initial;
  outline: none;
`;
