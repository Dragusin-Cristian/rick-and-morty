import './App.css';
import React from 'react';
import { Routes, Route, Navigate, Link } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { fetchCharacters } from './store/Characters_Actions';
// import CharactersContext from './store/CharactersContext';
import AppLayout from './layouts/AppLayout';
import DetailsPage from './pages/DetailsPage';
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  // const ctx = useContext(CharactersContext);
  // const fetchCharacters = ctx.fetchCharacters;
  // fetchCharacters();
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchCharacters())
  }, [dispatch]);

  return (
    <AppLayout>
      <Routes>
        <Route path='/characters/:id' element={<DetailsPage />} />
        <Route path='/' element={<Navigate to={'/characters'} />} />
        <Route path='/characters' element={<SearchPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
