import { Dispatch } from 'redux';
import Button from '../../../components/Button';
import { addPokedex } from '../../../global/redux';
import { PokemonResults } from '../../../types/ResponseGetPokemons';
import { ButtonPokemon, Container } from './styles';

interface CardPokemon {
  pokemon: PokemonResults;
  dispatch: Dispatch;
  getEffect: (pokemon: PokemonResults) => void;
}

const CardPokemon = ({ dispatch, getEffect, pokemon }: CardPokemon) => {
  return (
    <Container type={pokemon.types[0].type.name} key={pokemon.url}>
      <h1>{pokemon.name}</h1>

      <img src={pokemon.img} alt='teste' height='150px' />
      <ButtonPokemon>
        <Button
          onClick={() => {
            dispatch(addPokedex(pokemon));
          }}
        >
          Guardar pokemon
        </Button>
        <Button
          onClick={() => {
            getEffect(pokemon);
          }}
        >
          Ver efeito
        </Button>
      </ButtonPokemon>
    </Container>
  );
};
export { CardPokemon };
