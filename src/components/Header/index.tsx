import { Container } from './styles';
import LogoPng from '../../assets/pokedex_logo.png';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import { pokedex } from '../../global/redux';
import { useSelector } from 'react-redux';

export const Header = ({ store = false }) => {
  const pokedexSelect = useSelector(pokedex);
  const navigate = useNavigate();

  return (
    <Container>
      <img src={LogoPng} alt='logo' height={'170vh'} />
      <nav>
        <h1>
          Pokemons <br /> capturados
        </h1>
        <h1> {pokedexSelect.length}</h1>
        <Button
          onClick={() => {
            store ? navigate('/') : navigate('/pokedex');
          }}
          style={{ width: '100%' }}
        >
          {store ? '<- Voltar' : 'Ver Pokemons Capturados'}
        </Button>
      </nav>
    </Container>
  );
};
