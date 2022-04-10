import styled from 'styled-components';
import { pokemonColors } from '../../global/pokemonColors';
import { TypesColors } from '../../types/ResponseGetPokemons';

export const Container = styled.div`
  background: #3c5aa6;
  min-height: 100vh !important;
  padding-bottom: 30px;
`;

export const ListPokemon = styled.div<TypesColors>`
  padding: 10px;
  background-color: ${(props) => {
    return `${pokemonColors[props.type]}`;
  }};
  margin: 15px 0px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  img {
    padding-right: 4px;
    background-color: #fff;
    border-radius: 50%;
  }
  h1 {
    color: black;
  }
  > div {
    display: flex;
    justify-content: space-between;
    width: 20%;
    padding-right: 150px;
    flex-wrap: wrap;
  }
`;
