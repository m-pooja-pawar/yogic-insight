import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import {Box} from '@mui/material';
import {Typography} from '@mui/material';
import {NavLink} from 'react-router-dom';

export function Logo(): JSX.Element {
  return (
    <Box>
      <NavLink style={{textDecoration: 'none'}} to='/'>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}>
          <SelfImprovementIcon color='primary' sx={{fontSize: 40}}></SelfImprovementIcon>
          <Typography color='primary' component='span' sx={{fontWeight: 'bold'}} variant='h6'>
            Yogic Insight
          </Typography>
        </Box>
      </NavLink>
    </Box>
  );
}
