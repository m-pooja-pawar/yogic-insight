import {createTheme} from '@mui/material';

export const theme = createTheme({
  palette: {
    /* primary: {
      main: '#abd9bf',
    },
    background: {
      default: '#f8f9fa',
    }, */
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    button: {
      textTransform: 'none',
    },
  },
});
