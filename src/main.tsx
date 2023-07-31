import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import './index.css';
import {ThemeProvider} from '@emotion/react';
import {BrowserRouter} from 'react-router-dom';
import {theme} from './theme/theme';

const rootElement = window.document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  rootElement,
);
