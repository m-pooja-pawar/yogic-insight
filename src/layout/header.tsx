import {AppBar, Box, IconButton, Toolbar, styled} from '@mui/material';

import {Logo} from '../components/logo';
import MenuIcon from '@mui/icons-material/Menu';
import {SearchAsana} from '../components/searchAsana';

const Offset = styled('div')(({theme}) => theme.mixins.toolbar);

export function Header({onDrawerToggle}: {readonly onDrawerToggle: () => void}): JSX.Element {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position='fixed' sx={{boxShadow: 'none'}}>
        <Toolbar sx={{justifyContent: 'space-between'}}>
          <Box sx={{display: 'flex', alignItems: 'center'}}>
            <IconButton
              aria-label='menu'
              color='inherit'
              edge='start'
              onClick={onDrawerToggle}
              size='large'
              sx={{display: {sm: 'flex', md: 'none'}, mr: 2}}>
              <MenuIcon />
            </IconButton>
            <Box sx={{display: {xs: 'none', sm: 'block'}}}>
              <Logo></Logo>
            </Box>
          </Box>
          <SearchAsana></SearchAsana>
        </Toolbar>
      </AppBar>
      <Offset />
    </Box>
  );
}
