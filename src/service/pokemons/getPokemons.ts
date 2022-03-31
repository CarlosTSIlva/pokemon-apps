import { ResponseGetPokemon } from '../../types/ResponseGetPokemons';
import api from '../http';

const getPokemons = async (page: number): Promise<ResponseGetPokemon> => {
  const response = await api.get(`pokemon?offset=${30 * page}limit=30`);
  return response.data;
};

export { getPokemons };
