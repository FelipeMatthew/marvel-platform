import { Routes, Route } from 'react-router-dom'

import NotFoundPage from './pages/NotFound';
import HqsPage from './pages/Hqs';
import LoginPage from './pages/Login';
import MoviesPage from './pages/Movies';
import CharactersPage from './pages/Characters';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='*' element={<NotFoundPage />} />
      <Route path='/' element={<LoginPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/movies' element={<MoviesPage />} />
      <Route path='/characters' element={<CharactersPage />} />
      <Route path='/hqs' element={<HqsPage />} />
    </Routes>
  );
};

export default AppRouter