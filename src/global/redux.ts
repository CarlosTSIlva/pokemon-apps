import { createSlice, configureStore } from '@reduxjs/toolkit';
import { PokemonResults } from '../types/ResponseGetPokemons';

export const counterPokemonSlice = createSlice({
  name: 'counterPokemon',
  initialState: {
    value: 0,
    pokedex: [] as PokemonResults[],
  },
  reducers: {
    addPokedex: (state, action) => {
      state.pokedex.push(action.payload);
    },
  },
});

export const { addPokedex } = counterPokemonSlice.actions;
const store = configureStore({
  reducer: counterPokemonSlice.reducer,
});

export const pokedex = (state: { pokedex: [] }) => {
  return state.pokedex;
};

export { store };
