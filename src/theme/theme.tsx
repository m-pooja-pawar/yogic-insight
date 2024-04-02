import {createTheme} from '@mui/material';
import type {} from '@mui/x-data-grid/themeAugmentation';

export const theme = createTheme({
  palette: {
    background: {
      default: '#fffff',
    },
    primary: {
      main: '#008080',
    },
    secondary: {
      main: '#F0EDEE',
    },
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          '&.MuiDataGrid-root--densityCompact': {
            '.MuiDataGrid-cell': {
              paddingTop: '8px',
              paddingBottom: '8px',
            },
          },
        },
      },
    },
  },
});
