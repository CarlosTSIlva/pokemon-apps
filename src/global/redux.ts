import { createSlice, configureStore } from '@reduxjs/toolkit';
import { PokemonResults } from '../types/ResponseGetPokemons';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    pokedex: [] as any,
  },
  reducers: {
    addPokedex: (state, action) => {
      state.pokedex.push(action.payload);
    },
  },
});

export const { addPokedex } = counterSlice.actions;
const store = configureStore({
  reducer: counterSlice.reducer,
});

export const pokedex = (state: { pokedex: [] }) => {
  return state.pokedex;
};

export { store };
