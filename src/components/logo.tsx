import Box from '@mui/material/Box';
import {NavLink} from 'react-router-dom';
import Typography from '@mui/material/Typography';

export function Logo(): JSX.Element {
  return (
    <Box>
      <NavLink style={{textDecoration: 'none'}} to='/'>
        <Typography noWrap component='div' sx={{color: 'black', fontStyle: 'italic', fontWeight: '600'}} variant='h4'>
          Yoga
        </Typography>
      </NavLink>
    </Box>
  );
}
