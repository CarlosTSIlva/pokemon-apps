import { useCallback, useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Header } from '../../components/Header';
import { pokedex } from '../../global/redux';
import { Container, ListPokemon } from './styles';

const Pokedex = () => {
  const pokedexSelect = useSelector(pokedex);
  const [loading, setLoading] = useState(true);
  const [arrayPokedex, setArrayPokedex] = useState([] as any);

  const map = useCallback(async () => {
    const array = [] as any;
    const count = pokedexSelect.reduce(
      (acc, e) => acc.set(e, (acc.get(e) || 0) + 1),
      new Map()
    );
    count.forEach(async (value: string, key: any) => {
      return await array.push({ value: value, key });
    });
    setArrayPokedex(array);
    setLoading(false);
    return;
  }, [pokedexSelect]);

  useLayoutEffect(() => {
    map();
  }, [map]);

  return (
    <Container>
      <Header store={true} />
      <div>
        {loading ? (
          <h1>loading</h1>
        ) : (
          <div>
            {arrayPokedex.map(({ key, value }: any) => {
              return (
                <ListPokemon type={key.types[0].type.name} key={key.name}>
                  <img src={key.img} alt={key.name} height='150px' />
                  <div>
                    <h1>{key?.name}</h1>
                    <div>
                      <h1>quantidade</h1>
                      <h1>{value}</h1>
                    </div>
                  </div>
                </ListPokemon>
              );
            })}
          </div>
        )}
      </div>
    </Container>
  );
};

export { Pokedex };
