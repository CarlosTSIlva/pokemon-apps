interface PokemonTypes {
  type: {
    name:
      | 'grass'
      | 'poison'
      | 'fire'
      | 'flying'
      | 'bug'
      | 'water'
      | 'normal'
      | 'ground'
      | 'fairy'
      | 'electric'
      | 'fighting'
      | 'psychic'
      | 'rock'
      | 'steel'
      | 'ice'
      | 'ghost'
      | 'dragon'
      | 'dark';
  };
}

interface TypesColors {
  type: PokemonTypes['type']['name'];
}
interface PokemonResults {
  name: string;
  url: string;
  img: string;
  abilities: PokemonAbilities[];
  types: PokemonTypes[];
}

interface EffectPokemon {
  effect: string;
  language: { name: string };
  short_effect: string;
}

interface PokemonAbilities {
  ability: {
    name: string;
    url: string;
  };
}

interface ResponseGetPokemon {
  next: string | null;
  previous: string | null;
  results: PokemonResults[];
}

export type {
  ResponseGetPokemon,
  PokemonAbilities,
  EffectPokemon,
  PokemonResults,
  PokemonTypes,
  TypesColors,
};
