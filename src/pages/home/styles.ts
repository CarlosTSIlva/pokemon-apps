import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  align-items: center;

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

export const Modal = styled.div`
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  > div {
    background-color: #fefefe;
    border-radius: 15px;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
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
