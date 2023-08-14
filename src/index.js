import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { Reset } from './styles/Reset';
import { GlobalStyle } from './styles/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter basename="goit-react-hw-05-movies">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Reset />
        <App />

        <ToastContainer autoClose={1000} />
      </ThemeProvider>
    </BrowserRouter>
  </>
);
