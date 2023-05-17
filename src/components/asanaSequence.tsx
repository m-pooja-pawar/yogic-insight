import {Box, Grid, Typography} from '@mui/material';
import {AsanaList, AsanaSequenceList} from '../interface/asanaSequence';
import {NavLink} from 'react-router-dom';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';

export function AsanaSequence(data: AsanaSequenceList): JSX.Element {
  const getAsanaList = (): JSX.Element => {
    return (
      <Grid container spacing={3}>
        {data.asanas.map((asanaElement: AsanaList, index: number) => {
          return (
            <Grid
              item
              component={NavLink}
              key={asanaElement.id}
              lg={4}
              md={6}
              sx={{textDecoration: 'none'}}
              to={asanaElement.routing}
              xs={12}>
              <Box sx={{boxShadow: 1, borderRadius: 1, p: 2}}>
                <Box sx={{textAlign: 'center', height: '150px'}}>
                  {asanaElement.img != '' ? (
                    <img height='100%' src={asanaElement.img}></img>
                  ) : (
                    <SelfImprovementIcon color='primary' sx={{fontSize: 150}}></SelfImprovementIcon>
                  )}
                </Box>
                <Typography align='center' color='primary' component='p'>
                  {index + 1}. {asanaElement.label}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    );
  };

  return (
    <Box>
      <Typography color='primary' component='p' variant='h5'>
        {data.header}
      </Typography>
      <Typography component='p' my={2}>
        {data.basicInfo}
      </Typography>
      {getAsanaList()}
    </Box>
  );
}
