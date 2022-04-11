import {
  EffectPokemon,
  PokemonAbilities,
  PokemonResults,
  PokemonTypes,
} from '../../types/ResponseGetPokemons';
import api from '../http';
import { getPokemons } from './getPokemons';

const getImage = async (url: string) => {
  let img = '';
  let abilities = [] as PokemonAbilities[];
  let types = [] as PokemonTypes[];
  await api.get(url).then((res) => {
    img = res.data.sprites.other.home.front_default;
    abilities = res.data.abilities;
    types = res.data.types;
  });

  return { img, abilities, types };
};

const requestFormatted = async (page: number) => {
  const response = await getPokemons(page);
  const result = response.results.map(async (pokemon) => {
    const response = await getImage(pokemon.url);
    pokemon.img = response.img;
    pokemon.abilities = response.abilities;
    pokemon.types = response.types;
  });
  await Promise.all(result);
  return response;
};

const getPokemonEffect = async (pokemon: PokemonResults) => {
  const data = [] as EffectPokemon[];
  const data2 = pokemon.abilities.map(async (ability: PokemonAbilities) => {
    await api.get(ability.ability.url).then((res) => {
      res.data.effect_entries.map(async (e: EffectPokemon) => {
        if (e.language.name === 'en') {
          data.push(e);
        }
      });
    });
  });

  await Promise.all(data2);
  return data;
};
export { getImage, requestFormatted, getPokemonEffect };
