import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  background-color: #2a75bb;
  text-align: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
  align-items: center;
  max-height: 400px;

  border: 18px red solid;
  nav {
    font-weight: bold;
    font-size: 3vw;
  }
  h1 {
    padding: 0px;
    margin: 0px;
  }
`;
