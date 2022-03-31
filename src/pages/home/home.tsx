import { useCallback, useEffect, useState } from 'react';
import './App.css';

import LogoPng from '../../assets/pokedex_logo.png';

import { useSelector, useDispatch } from 'react-redux';

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
  Header,
} from './styles';

import { addPokedex, pokedex } from '../../global/redux';

import { getPokemons } from '../../service/pokemons/getPokemons';

import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';

function Home() {
  const [pokemon, setPokemon] = useState<ResponseGetPokemon>();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [effect, setEffect] = useState<EffectPokemon[]>([]);
  const [openModal, setOpenModal] = useState(false);

  const pokedexSelect = useSelector(pokedex);
  const navigate = useNavigate();
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

  return (
    <div className='App'>
      <div
        id='myModal'
        className='modal'
        style={{ display: !openModal ? '' : 'block' }}
      >
        <div className='modal-content'>
          <span onClick={() => setOpenModal(!openModal)} className='close'>
            &times;
          </span>
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
      </div>

      <Header>
        <img src={LogoPng} alt='logo' height={170} />
        <nav>
          <h1>
            Pokemons <br /> capturados
          </h1>
          <h1> {pokedexSelect.length}</h1>
          <Button
            onClick={() => {
              navigate('/pokedex');
            }}
            style={{ width: '100%' }}
          >
            Ver pokemons
          </Button>
        </nav>
      </Header>

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

      <NavigationButton>
        <Button
          disabled={pokemon?.previous == null}
          onClick={() => {
            setPage(page - 1);
          }}
        >
          Anterior
        </Button>
        <Button
          disabled={pokemon?.next == null}
          onClick={() => setPage(page + 1)}
        >
          Proximo
        </Button>
      </NavigationButton>
    </div>
  );
}

export default Home;
