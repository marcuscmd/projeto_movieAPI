import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './styles/global';
import { Login } from './views/Login';
import Routering from './routes/routes';
import { AuthProvider } from './components/auth/authContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <GlobalStyle />
      <Routering />
    </AuthProvider>
  </React.StrictMode>
);