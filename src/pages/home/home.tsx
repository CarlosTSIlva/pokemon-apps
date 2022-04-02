import { useCallback, useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import {
  EffectPokemon,
  PokemonAbilities,
  ResponseGetPokemon,
} from '../../types/ResponseGetPokemons';

import api from '../../service/http';

import {
  Container,
  CardPokemon,
  ButtonPokemon,
  NavigationButton,
  Modal,
  CloseModal,
  ContainerHome,
} from './styles';

import { addPokedex } from '../../global/redux';

import { getPokemons } from '../../service/pokemons/getPokemons';

import Button from '../../components/Button';
import { Header } from '../../components/Header';

function Home() {
  const [pokemon, setPokemon] = useState<ResponseGetPokemon>();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [effect, setEffect] = useState<EffectPokemon[]>([]);
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();
  const getImage = useCallback(async (url: string) => {
    let response = '';
    let abilities = [] as PokemonAbilities[];
    await api.get(url).then((res) => {
      response = res.data.sprites.other.home.front_default;
      abilities = res.data.abilities;
    });

    return { img: response, abilities: abilities };
  }, []);
  const getPokemon = useCallback(async (): Promise<void> => {
    const response = await getPokemons(page);
    const teste = response.results.map(async (pokemon) => {
      const response = await getImage(pokemon.url);
      pokemon.img = response.img;
      pokemon.abilities = response.abilities;
    });
    await Promise.all(teste);

    setPokemon(response);
    setLoading(false);
  }, [page, getImage]);

  const getEffect = useCallback(async (pokemon) => {
    const data = [] as EffectPokemon[];
    const data2 = pokemon.abilities.map(async (ability: PokemonAbilities) => {
      await api.get(ability.ability.url).then((res) => {
        res.data.effect_entries.map(async (e: EffectPokemon) => {
          if (e.language.name === 'en') {
            data.push(e);
          }
          return data;
        });
        return data;
      });
    });

    await Promise.all(data2);

    setEffect(data);
    setOpenModal(true);
  }, []);

  useEffect(() => {
    getPokemon();
  }, [page, getPokemon]);

  function topFunction() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <ContainerHome>
      <Modal style={{ display: !openModal ? '' : 'block' }}>
        <div>
          <CloseModal
            onClick={() => setOpenModal(!openModal)}
            className='close'
          >
            &times;
          </CloseModal>
          {effect.map((e) => {
            return (
              <div key={e.effect}>
                <hr />
                <h1>efeito</h1>
                <p>{e.effect}</p>
                <h1>descrição curta</h1>
                <p>{e.short_effect}</p>
                <hr />
              </div>
            );
          })}
        </div>
      </Modal>
      <Header />
      {loading ? (
        <div>
          <h1>Loading....</h1>
        </div>
      ) : (
        <Container>
          {pokemon?.results.map((pokemon) => {
            return (
              <CardPokemon key={pokemon.url}>
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
              </CardPokemon>
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
