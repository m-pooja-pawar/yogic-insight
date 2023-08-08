import {Box, Drawer, Grid, useTheme} from '@mui/material';
import {useMediaQuery} from '@mui/material';
import {Container} from '@mui/system';
import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

import {Logo} from '../components/logo';

import {Header} from './header';
import {MainContent} from './mainContent';
import {Sidebar} from './sidebar';

export function Layout(): JSX.Element {
  const drawerWidth = 300;
  const location = useLocation();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
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
          <Grid item md={9} sx={{height: 'calc(100vh - 64px)', overflow: 'auto'}}>
            <Container fixed>
              <MainContent></MainContent>
            </Container>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}
