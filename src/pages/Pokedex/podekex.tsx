import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { pokedex } from '../../global/redux';
import { PokemonResults } from '../../types/ResponseGetPokemons';

const Pokedex = () => {
  const pokedexSelect = useSelector(pokedex);
  const [loading, setLoading] = useState(true);
  const [arrayPokedex, setArrayPokedex] = useState([] as any);
  const navigate = useNavigate();

  useEffect(() => {
    map();
  }, []);

  const map = () => {
    const array = [] as any;
    const teste = pokedexSelect.reduce(
      (acc, e) => acc.set(e, (acc.get(e) || 0) + 1),
      new Map()
    );

    teste.forEach((value: string, key: any) => {
      array.push({ value: value, key });
    });
    setArrayPokedex(array);
    setLoading(false);
  };

  return (
    <div>
      <h1>loja ❤️ {pokedexSelect.length} soma total</h1>
      <button onClick={() => navigate(-1)}> Voltar</button>
      <div>
        {loading ? (
          <h1>loading</h1>
        ) : (
          <div>
            {arrayPokedex.map((e: any) => {
              return (
                <div key={e.key.name}>
                  <h1>{e?.key?.name}</h1>
                  <h1>{e?.value}</h1>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export { Pokedex };
