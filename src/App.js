import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from './layouts/AppLayout/AppLayout';
import DetailsPage from './pages/DetailsPage';
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
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
