import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import { CharactersContextProvider } from './store/CharactersContext';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <CharactersContextProvider>

  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter >

  // </CharactersContextProvider >
);

