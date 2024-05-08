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
    fontFamily: ['Inter', 'sans-serif', 'Noto_Sans_Devanagari'].join(','),
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Noto_Sans_Devanagari';
          src: url('${
            import.meta.env.VITE_BASE_NAME
          }/fonts/Noto_Sans_Devanagari/static/NotoSansDevanagari-Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }
      `,
    },
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
