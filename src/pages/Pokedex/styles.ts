import styled from 'styled-components';

export const Container = styled.div`
  background: #3c5aa6;

  height: auto;
  padding-bottom: 30px;
`;

export const ListPokemon = styled.div`
  padding: 15px;
  margin: 15px 0px;
  display: flex;
  background-color: #2a75bb;
  text-align: center;
  align-items: center;
  h1 {
    color: red;
    text-shadow: -1px -1px 0px black, -1px 1px 0px black, 1px -1px 0px black;
  }
  > div {
    display: flex;
    justify-content: space-between;
    width: 70%;
  }
`;
