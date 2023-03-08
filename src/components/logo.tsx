import Box from '@mui/material/Box';
import {NavLink} from 'react-router-dom';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import {Typography} from '@mui/material';

export function Logo(): JSX.Element {
  return (
    <Box>
      <NavLink style={{textDecoration: 'none'}} to='/'>
        <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
          <SelfImprovementIcon color='primary' sx={{fontSize: 50}}></SelfImprovementIcon>
          <Typography color='primary' component='span' sx={{fontWeight: '600'}} variant='h4'>
            Yoga
          </Typography>
        </Box>
      </NavLink>
    </Box>
  );
}
