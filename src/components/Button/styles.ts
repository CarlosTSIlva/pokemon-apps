import styled from 'styled-components';
import { shade } from 'polished';

interface ButtonProps {
  isDisabled?: boolean;
}

export const Container = styled.button<ButtonProps>`
  background: ${(props) => {
    return props.isDisabled ? '#d3d3d3' : '#ff9000';
  }};
  color: #312e38;
  border: 0;
  border-radius: 10px;
  width: 40%;
  height: 56px;
  padding: 0 16px;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;
  &:hover {
    background: ${(props) => {
      return shade(0.2, props.isDisabled ? '#d3d3d3' : '#ff9000');
    }};
  }
`;
