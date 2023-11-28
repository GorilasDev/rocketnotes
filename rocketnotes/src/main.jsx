import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './style/global.js';

import theme from './style/theme.js'

import { Details } from './pages/Details';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
      <Details />
    </ThemeProvider>

  </React.StrictMode>,
)
