import styled from 'styled-components';
import { pokemonColors } from '../../../global/pokemonColors';
import { TypesColors } from '../../../types/ResponseGetPokemons';

export const Container = styled.div<TypesColors>`
  background: ${(props) => {
    return `${pokemonColors[props.type]}`;
  }};
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
