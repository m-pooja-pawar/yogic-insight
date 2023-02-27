import {Typography, useTheme} from '@mui/material';

import Box from '@mui/material/Box';
import {NavLink} from 'react-router-dom';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';

export function Logo(): JSX.Element {
  const theme = useTheme();

  return (
    <Box>
      <NavLink style={{textDecoration: 'none'}} to='/'>
        <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
          <SelfImprovementIcon color='primary' sx={{fontSize: 50}}></SelfImprovementIcon>
          <Typography component='span' sx={{color: theme.palette.primary.main, fontWeight: '600'}} variant='h4'>
            Yoga
          </Typography>
        </Box>
      </NavLink>
    </Box>
  );
}
