import {ThemeProvider} from '@emotion/react';
import {CssBaseline} from '@mui/material';
import axios from 'axios';
import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import {App} from './App';
import {theme} from './theme/theme';

axios.defaults.baseURL = 'https://m-pooja-pawar.github.io/yogic-insight';
const rootElement = window.document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename='/yogic-insight'>
        <Suspense fallback={<></>}>
          <App />
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  rootElement,
);
