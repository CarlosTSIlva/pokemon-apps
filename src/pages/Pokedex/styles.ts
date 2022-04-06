import styled from 'styled-components';

export const Container = styled.div`
  background: #3c5aa6;
  min-height: 100vh !important;
  padding-bottom: 30px;
`;

export const ListPokemon = styled.div`
  padding: 10px;
  margin: 15px 0px;
  display: flex;
  background-color: #2a75bb;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  img {
    padding-right: 4px;
  }
  h1 {
    color: red;
    font-size: 1.6em;
    text-shadow: -1px -1px 0px black, -1px 1px 0px black, 1px -1px 0px black;
  }
  > div {
    display: flex;
    justify-content: center;
    width: 70%;
    flex-wrap: wrap;
  }
`;
