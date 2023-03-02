import {Box, Drawer, Grid, useTheme} from '@mui/material';
import {useEffect, useState} from 'react';

import {Container} from '@mui/system';
import {Header} from './header';
import {Logo} from '../components/logo';
import {MainContent} from './mainContent';
import {Sidebar} from './sidebar';
import {useLocation} from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

export function Layout(): JSX.Element {
  const drawerWidth = 240;
  const location = useLocation();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userClicked, setUserClicked] = useState(false);

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen);
  };

  const handleUserClick = (): void => {
    setUserClicked(true);
  };

  useEffect(() => {
    if (userClicked) {
      handleDrawerToggle();
    }
    setUserClicked(false);
  }, [location]);

  return (
    <Box>
      <Header onDrawerToggle={handleDrawerToggle}></Header>
      {!matches ? (
        <>
          <Drawer
            container={document.body}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            onClose={handleDrawerToggle}
            open={mobileOpen}
            sx={{
              '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
            }}
            variant='temporary'>
            <Box onClick={handleUserClick} sx={{p: 2}}>
              <Box>
                <Logo></Logo>
              </Box>
              <Sidebar></Sidebar>
            </Box>
          </Drawer>
          <Container fixed>
            <MainContent></MainContent>
          </Container>
        </>
      ) : (
        <Grid container>
          <Grid
            item
            md={3}
            sx={{
              '--Grid-borderWidth': '1px',
              '& > div': {
                borderRight: 'var(--Grid-borderWidth) solid',
                borderColor: 'divider',
                height: 'calc(100vh - 64px)',
                padding: '0 8px',
                overflow: 'auto',
              },
            }}>
            <Sidebar></Sidebar>
          </Grid>
          <Grid item md={9}>
            <Container fixed>
              <MainContent></MainContent>
            </Container>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}
