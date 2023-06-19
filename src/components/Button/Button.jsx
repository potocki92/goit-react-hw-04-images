import React from 'react';
import { ButtonContainer } from './Button.styled';

const Button = ({ onClick, children }) => {
  return (
    <ButtonContainer type="button" className="button" onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
