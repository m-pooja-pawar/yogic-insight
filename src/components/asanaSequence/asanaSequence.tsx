import {Box, Grid, Typography, useTheme} from '@mui/material';
import {NavLink} from 'react-router-dom';

import {AsanaImage} from '../asanaImage/asanaImage';

import {Carousel} from './../carousel/carousel';
import {AsanaList, AsanaSequenceList} from './asanaSequenceProp';

export function AsanaSequence(data: AsanaSequenceList): JSX.Element {
  const theme = useTheme();
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
              <Box
                sx={{
                  boxShadow: 2,
                  borderRadius: 2,
                  height: '100%',
                  px: 1,
                  backgroundColor: theme.palette.common.white,
                }}>
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
                <Typography align='center' color='primary' component='p' fontWeight={'bolder'}>
                  {index + 1}. {asanaElement.label}
                </Typography>
                <Typography align='center' color='primary' component='p' fontWeight={'bolder'} mb={2}>
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
      <Typography color='primary' component='p' fontWeight={'bolder'} variant='h5'>
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
