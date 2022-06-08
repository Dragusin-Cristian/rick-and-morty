import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from './layouts/AppLayout/AppLayout';

const DetailsPage = React.lazy(() => import('./pages/DetailsPage'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));

function App() {
  return (
    <AppLayout>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path='/characters/:id' element={<DetailsPage />} />
          <Route path='/' element={<Navigate to={'/characters'} />} />
          <Route path='/characters' element={<SearchPage />} />
          <Route path="*" element={<Navigate to={'/characters'} />} />
        </Routes>
      </Suspense>
    </AppLayout>
  );
}

export default App;
