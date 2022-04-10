import styled from 'styled-components';

interface ButtonProps {
  isDisabled?: boolean;
}

export const Container = styled.button<ButtonProps>`
  color: black;
  margin: 40px 4px;
  background-color: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border: solid 1px black;
  width: 100%;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
