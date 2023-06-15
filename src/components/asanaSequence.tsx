import {Box, Grid, Typography} from '@mui/material';
import {AsanaList, AsanaSequenceList} from '../interface/asanaSequence';
import {NavLink} from 'react-router-dom';
import {Carousel} from './carousel';
import {AsanaImage} from './asanaImage';

export function AsanaSequence(data: AsanaSequenceList): JSX.Element {
  const getAsanaList = (): JSX.Element => {
    return (
      <Grid container py={2} spacing={3}>
        {data.asanas.map((asanaElement: AsanaList, index: number) => {
          return (
            <Grid
              item
              component={NavLink}
              key={asanaElement.id}
              lg={4}
              md={6}
              sx={{textDecoration: 'none'}}
              to={asanaElement.routing ? asanaElement.routing : ''}
              xs={12}>
              <Box sx={{boxShadow: 2, borderRadius: 2, height: '100%'}}>
                <Box sx={{textAlign: 'center', height: '150px'}}>
                  <AsanaImage imgSrc={asanaElement.img}></AsanaImage>
                </Box>
                <Typography align='center' color='primary' component='p' mb={2}>
                  {index + 1}. {asanaElement.label}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    );
  };

  const showCarousel = (): JSX.Element => {
    return (
      <Carousel
        carouselData={
          data.carouselData && data.carouselData.length
            ? ([] as AsanaList[]).concat(data.carouselData)
            : ([] as AsanaList[])
        }></Carousel>
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
      {data.carouselData ? showCarousel() : null}
      {getAsanaList()}
    </Box>
  );
}
