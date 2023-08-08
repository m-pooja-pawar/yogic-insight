import {Box, Grid, Typography} from '@mui/material';
import {NavLink} from 'react-router-dom';

import {AsanaList, AsanaSequenceList} from '../interface/asanaSequence';

import {AsanaImage} from './asanaImage';
import {Carousel} from './carousel';

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
              <Box sx={{boxShadow: 2, borderRadius: 2, height: '100%', px: 1}}>
                <Box
                  sx={{
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '150px',
                    py: 2,
                  }}>
                  <AsanaImage imgSrc={asanaElement.img}></AsanaImage>
                </Box>
                <Typography align='center' color='primary' component='p'>
                  {index + 1}. {asanaElement.label}
                </Typography>
                <Typography align='center' color='primary' component='p' mb={2}>
                  {asanaElement.label_en ? '(' + asanaElement.label_en + ')' : ''}
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
