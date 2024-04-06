import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import {Box} from '@mui/material';
import {Typography} from '@mui/material';
import {useTranslation} from 'react-i18next';
import {NavLink} from 'react-router-dom';

export function Logo(): JSX.Element {
  const {t} = useTranslation('app');

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
            {t('yogicInsight')}
          </Typography>
        </Box>
      </NavLink>
    </Box>
  );
}
