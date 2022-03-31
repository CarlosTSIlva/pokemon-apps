import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  align-items: flex-start;
  justify-items: center;
  background-color: #2a75bb;
`;

export const CardPokemon = styled.div`
  background: #3c5aa6;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 4px #ffcb05 solid;
  border-radius: 15px;
  justify-items: center;
  height: 300px;
`;

export const ButtonPokemon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const NavigationButton = styled.div`
  background-color: #2a75bb;
  display: flex;
  flex: 1;
  justify-content: space-around;
  width: auto;
  padding-bottom: 2%;
`;

export const Header = styled.header`
  display: flex;
  background-color: #2a75bb;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  border: 18px red solid;
  nav {
    font-weight: bold;
    font-size: 26px;
  }
`;
