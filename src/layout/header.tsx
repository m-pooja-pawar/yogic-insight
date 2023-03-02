import {AppBar, Box, IconButton, Toolbar, styled} from '@mui/material';

import {Logo} from '../components/logo';
import MenuIcon from '@mui/icons-material/Menu';
import {Search} from '../components/search';

const Offset = styled('div')(({theme}) => theme.mixins.toolbar);

export function Header({onDrawerToggle}: {readonly onDrawerToggle: () => void}): JSX.Element {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar color='transparent' position='fixed' sx={{boxShadow: '0 2px 3px 0 lightgray'}}>
        <Toolbar sx={{justifyContent: 'space-between'}}>
          <Box sx={{display: 'flex', alignItems: 'center'}}>
            <IconButton
              aria-label='menu'
              color='inherit'
              edge='start'
              onClick={onDrawerToggle}
              size='large'
              sx={{display: {xs: 'flex', sm: 'none'}, mr: 2}}>
              <MenuIcon />
            </IconButton>
            <Box sx={{display: {xs: 'none', sm: 'block'}}}>
              <Logo></Logo>
            </Box>
          </Box>
          <Search></Search>
        </Toolbar>
      </AppBar>
      <Offset />
    </Box>
  );
}
