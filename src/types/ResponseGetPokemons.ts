interface PokemonResults {
  name: string;
  url: string;
  img: string;
  abilities: PokemonAbilities[];
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
};
