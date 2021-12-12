import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Routes } from './routes';

import { UserProvider } from './context/userContext';

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes />
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
