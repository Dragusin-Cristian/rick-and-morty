import './App.css';
import { Routes, Route, Navigate, Link } from "react-router-dom";
import { useEffect, useContext } from 'react';
import CharactersContext from './store/CharactersContext';
import AppLayout from './layouts/AppLayout';
import DetailsPage from './pages/DetailsPage';
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const ctx = useContext(CharactersContext);
  const fetchCharacters = ctx.fetchCharacters;

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);


  return (
    <AppLayout>
      <Routes>
        <Route path='/' element={<Navigate to={'/characters'} />} />
        <Route path='/characters' element={<SearchPage />} />
        <Route path='/characters/:id' element={<DetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
