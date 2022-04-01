import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  isDisabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  isDisabled = false,
  ...rest
}) => (
  <Container isDisabled={isDisabled} type='button' {...rest}>
    {loading ? 'Carregando...' : children}
  </Container>
);

export default Button;
