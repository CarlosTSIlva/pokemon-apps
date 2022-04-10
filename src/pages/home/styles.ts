import styled from 'styled-components';
import { pokemonColors } from '../../global/pokemonColors';
import { PokemonTypes, TypesColors } from '../../types/ResponseGetPokemons';

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

export const NavigationButton = styled.div`
  background-color: #2a75bb;
  display: flex;
  flex: 1;
  justify-content: space-around;
  width: auto;
  padding-bottom: 2%;
`;
