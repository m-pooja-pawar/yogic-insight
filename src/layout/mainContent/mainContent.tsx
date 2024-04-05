import {Box} from '@mui/material';
import {useLayoutEffect} from 'react';
import {Outlet, useLocation} from 'react-router-dom';

import {Router} from '../../routes/router';
import {PageLoader} from '../../util/pageLoader';

export function MainContent(): JSX.Element {
  const {pathname} = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Box sx={{p: 2}}>
      <Router></Router>
      <Outlet />
      <PageLoader></PageLoader>
    </Box>
  );
}
