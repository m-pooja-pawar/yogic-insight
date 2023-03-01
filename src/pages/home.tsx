import Box from '@mui/material/Box';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';

export function Home(): JSX.Element {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <SelfImprovementIcon
        color='primary'
        sx={{fontSize: {xs: '300px', sm: '300px', md: '400px'}}}></SelfImprovementIcon>
    </Box>
  );
}
