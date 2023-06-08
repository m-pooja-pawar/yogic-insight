import './index.css';

import {App} from './App';
import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import {reportWebVitals} from './reportWebVitals';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
