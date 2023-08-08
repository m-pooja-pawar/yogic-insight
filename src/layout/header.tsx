import MenuIcon from '@mui/icons-material/Menu';
import {AppBar, Box, IconButton, Toolbar, styled, useTheme} from '@mui/material';

import {Logo} from '../components/logo';
import {Search} from '../components/search';

const Offset = styled('div')(({theme}) => theme.mixins.toolbar);

export function Header({onDrawerToggle}: {readonly onDrawerToggle: () => void}): JSX.Element {
  const theme = useTheme();

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position='fixed' sx={{boxShadow: '0 2px 3px 0 lightgray', backgroundColor: theme.palette.common.white}}>
        <Toolbar sx={{justifyContent: 'space-between'}}>
          <Box sx={{display: 'flex', alignItems: 'center'}}>
            <IconButton
              aria-label='menu'
              color='primary'
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
          <Search></Search>
        </Toolbar>
      </AppBar>
      <Offset />
    </Box>
  );
}
