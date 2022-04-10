import { EffectPokemon } from '../../types/ResponseGetPokemons';
import { CloseModal, Container } from './styles';

interface IsModalProps {
  openModal: boolean;
  effect: EffectPokemon[];
  closeModal: () => void;
}

export const Modal = ({ effect, openModal, closeModal }: IsModalProps) => {
  return (
    <Container style={{ display: !openModal ? '' : 'block' }}>
      <div>
        <CloseModal onClick={() => closeModal()} className='close'>
          &times;
        </CloseModal>
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
    </Container>
  );
};
