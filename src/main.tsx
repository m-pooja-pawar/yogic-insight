import {ThemeProvider} from '@emotion/react';
import {CssBaseline, Slide} from '@mui/material';
import {SnackbarProvider} from 'notistack';
import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import {App} from './App';
import {theme} from './theme/theme';
import './i18n';

const rootElement = window.document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename={import.meta.env.VITE_BASE_NAME}>
        <Suspense fallback={<></>}>
          <SnackbarProvider
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            maxSnack={5}
            TransitionComponent={Slide}>
            <App />
          </SnackbarProvider>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  rootElement,
);
