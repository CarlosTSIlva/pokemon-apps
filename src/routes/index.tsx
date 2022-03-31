import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/home';
import { Pokedex } from '../pages/Pokedex/podekex';

const routes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/pokedex' element={<Pokedex />}></Route>
    </Routes>
  );
};

export { routes };
