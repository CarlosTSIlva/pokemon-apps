import styled from 'styled-components';

export const ContainerHome = styled.div`
  background-color: #2a75bb;
  height: 100%;
  width: 100%;
  text-align: center;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  align-items: center;

  justify-items: center;
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

export const Modal = styled.div`
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  > div {
    text-align: center;
    background-color: #fefefe;
    border-radius: 15px;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }
`;

export const CloseModal = styled.div`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;
