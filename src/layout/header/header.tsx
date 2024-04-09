import MenuIcon from '@mui/icons-material/Menu';
import {AppBar, Box, IconButton, Stack, Toolbar, styled, useTheme} from '@mui/material';

import {LanguageOptions} from '../languageOptions/languageOptions';
import {Logo} from '../logo/logo';
import {Search} from '../search/search';

const Offset = styled('div')(({theme}) => theme.mixins.toolbar);

export function Header({onDrawerToggle}: {readonly onDrawerToggle: () => void}): JSX.Element {
  const theme = useTheme();

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position='fixed' sx={{boxShadow: '0 2px 3px 0 lightgray', backgroundColor: theme.palette.common.white}}>
        <Toolbar sx={{justifyContent: 'space-between'}}>
          <Box>
            <IconButton
              aria-label='menu'
              color='primary'
              edge='start'
              onClick={onDrawerToggle}
              size='large'
              sx={{display: {sm: 'flex', md: 'none'}, mr: 1}}>
              <MenuIcon />
            </IconButton>
            <Box sx={{display: {xs: 'none', md: 'block'}}}>
              <Logo></Logo>
            </Box>
          </Box>
          <Stack direction={'row'} spacing={1}>
            <Search></Search>
            <LanguageOptions></LanguageOptions>
          </Stack>
        </Toolbar>
      </AppBar>
      <Offset />
    </Box>
  );
}
