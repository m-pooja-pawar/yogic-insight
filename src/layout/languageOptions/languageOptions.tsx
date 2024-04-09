import {Language} from '@mui/icons-material';
import {IconButton, MenuItem, Menu, ListItemIcon} from '@mui/material';
import React, {FC} from 'react';

import {setSelectedLanguage} from '../../util/localStorageHelper';

export const LanguageOptions: FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (languageToSet: string): void => {
    setSelectedLanguage(languageToSet);
    location.reload();
  };

  const languageChangeOptions = (): JSX.Element => {
    return (
      <>
        <IconButton
          aria-controls={open ? 'language-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup='true'
          aria-label='change language'
          color='primary'
          onClick={handleClick}
          size='small'>
          <Language sx={{width: 30, height: 30}} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          id='language-menu'
          onClick={handleClose}
          onClose={handleClose}
          open={open}
          transformOrigin={{horizontal: 'right', vertical: 'top'}}>
          <MenuItem
            onClick={() => {
              handleLanguageChange('en');
              handleClose();
            }}>
            <ListItemIcon>
              <Language fontSize='medium' />
            </ListItemIcon>
            English
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleLanguageChange('hi');
              handleClose();
            }}>
            <ListItemIcon>
              <Language fontSize='medium' />
            </ListItemIcon>
            हिन्दी
          </MenuItem>
        </Menu>
      </>
    );
  };

  return languageChangeOptions();
};
