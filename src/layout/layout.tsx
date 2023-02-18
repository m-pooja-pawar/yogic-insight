import {Box, Drawer, Grid} from '@mui/material';

import {Container} from '@mui/system';
import {Header} from './header';
import {Logo} from '../components/logo';
import {MainContent} from './mainContent';
import {Sidebar} from './sidebar';
import {useState} from 'react';

export function Layout(): JSX.Element {
  const [mobileOpen, setMobileOpen] = useState(false);

  function handleDrawerToggle(): void {
    setMobileOpen(!mobileOpen);
  }

  const drawerWidth = 240;

  return (
    <Box>
      <Drawer
        container={document.body}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        onClose={handleDrawerToggle}
        open={mobileOpen}
        sx={{
          display: {sm: 'block', md: 'none'},
          '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
        }}
        variant='temporary'>
        <Box onClick={handleDrawerToggle} sx={{p: 2}}>
          <Box sx={{display: {xs: 'block', sm: 'none'}}}>
            <Logo></Logo>
          </Box>
          <Sidebar></Sidebar>
        </Box>
      </Drawer>
      <Header onDrawerToggle={handleDrawerToggle}></Header>
      <Grid container>
        <Grid
          item
          md={3}
          sx={{
            display: {xs: 'none', md: 'block'},
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
        <Grid item md={9} sm={12}>
          <Container fixed>
            <MainContent></MainContent>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
}
