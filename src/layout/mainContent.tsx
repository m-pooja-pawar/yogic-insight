import {Box} from '@mui/material';
import {Outlet} from 'react-router-dom';
import {Router} from '../routes/router';

export function MainContent(): JSX.Element {
  return (
    <Box sx={{p: 2}}>
      <Router></Router>
      <Outlet />
    </Box>
  );
}
