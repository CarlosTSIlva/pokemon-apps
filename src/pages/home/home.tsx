import { useCallback, useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import {
  EffectPokemon,
  ResponseGetPokemon,
} from '../../types/ResponseGetPokemons';

import { Container, NavigationButton, ContainerHome } from './styles';

import Button from '../../components/Button';
import { Header } from '../../components/Header';
import {
  getPokemonEffect,
  requestFormatted,
} from '../../service/pokemons/pokemon';
import { Modal } from '../../components/Modal';
import { CardPokemon } from './components';

function Home() {
  const [pokemon, setPokemon] = useState<ResponseGetPokemon>();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [effect, setEffect] = useState<EffectPokemon[]>([]);
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();

  const getPokemon = useCallback(async (): Promise<void> => {
    const response = await requestFormatted(page);
    setPokemon(response);
    setLoading(false);
  }, [page]);

  const getEffect = useCallback(async (pokemon) => {
    const data = await getPokemonEffect(pokemon);
    setEffect(data);
    setOpenModal(true);
  }, []);

  useEffect(() => {
    getPokemon();
  }, [page, getPokemon]);

  const closeModal = () => {
    setOpenModal(false);
  };

  const topFunction = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ContainerHome>
      <Modal closeModal={closeModal} effect={effect} openModal={openModal} />
      <Header />
      {loading ? (
        <div>
          <h1>Loading....</h1>
        </div>
      ) : (
        <Container>
          {pokemon?.results.map((pokemon) => {
            return (
              <CardPokemon
                dispatch={dispatch}
                getEffect={getEffect}
                pokemon={pokemon}
                key={pokemon.url}
              />
            );
          })}
        </Container>
      )}

      {loading ? null : (
        <NavigationButton>
          <Button
            isDisabled={pokemon?.previous == null}
            onClick={() => {
              if (page !== 0) {
                setPage(page - 1);
                topFunction();
              }
            }}
          >
            Anterior
          </Button>
          <Button
            isDisabled={pokemon?.next == null}
            onClick={() => {
              setPage(page + 1);
              topFunction();
            }}
          >
            Proximo
          </Button>
        </NavigationButton>
      )}
    </ContainerHome>
  );
}

export default Home;
