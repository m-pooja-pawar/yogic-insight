import {Grid, Typography} from '@mui/material';
import {Box} from '@mui/system';
import {AsanaData} from '../interface/asana';
import {Fragment} from 'react';
import {AsanaImage} from './asanaImage';
import {InstructionCarousel} from './instructionCarousel';

export function Asana(data: AsanaData): JSX.Element {
  const header = (): JSX.Element => {
    return (
      <Typography color='primary' component='p' mb={2} variant='h5'>
        {data.header} {data.header_en ? '(' + data.header_en + ')' : ''}
      </Typography>
    );
  };

  const startingPosition = (): JSX.Element => {
    return data.startingPosition ? (
      <Box>
        <Typography color='primary' component='p'>
          {data.startingPosition.header}
        </Typography>
        <Box sx={{textAlign: 'center', height: '200px', py: 2}}>
          <AsanaImage imgSrc={data.startingPosition.img}></AsanaImage>
        </Box>
        <Typography component='p' mb={2}>
          {data.startingPosition.instruction}
        </Typography>
      </Box>
    ) : (
      <></>
    );
  };

  const stages = (): JSX.Element => {
    return (
      <>
        {data.stage.map((stageData, stageIndex) => {
          return (
            <Fragment key={stageData.id}>
              <Typography color='primary' component='p' mt={5}>
                {data.stage.length === 1 ? 'Technique' : 'Practice ' + (stageIndex + 1) + '.'}
              </Typography>
              <Box sx={{my: 1}}>
                <Grid container>
                  <Grid item lg={5} sm={12} sx={{border: 1, borderColor: 'divider', borderRadius: 0}} xs={12}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '290px',
                      }}>
                      <AsanaImage imgSrc={stageData.img}></AsanaImage>
                    </Box>
                  </Grid>
                  <Grid item lg={7} sm={12} sx={{border: 1, borderColor: 'divider', borderRadius: 0}} xs={12}>
                    <InstructionCarousel carouselData={stageData.technique}></InstructionCarousel>
                  </Grid>
                </Grid>
              </Box>
              <ul>
                {stageData.technique.map((techniqueData, index) => {
                  return (
                    <Typography component='li' key={techniqueData.instruction}>
                      Step {index + 1}. {techniqueData.instruction}
                    </Typography>
                  );
                })}
                {stageData.info?.map((infoData) => {
                  return (
                    <Typography component='li' key={infoData}>
                      {infoData}
                    </Typography>
                  );
                })}
              </ul>
            </Fragment>
          );
        })}
      </>
    );
  };

  const generalInstructions = (): JSX.Element => {
    return data.info ? (
      <>
        <Typography color='primary' component='p' mt={5}>
          General Instructions
        </Typography>
        <ul>
          {data.info?.map((infoData) => {
            return (
              <Typography component='li' key={infoData}>
                {infoData}
              </Typography>
            );
          })}
        </ul>
      </>
    ) : (
      <></>
    );
  };

  return (
    <Box>
      {header()}
      {startingPosition()}
      {stages()}
      {generalInstructions()}
    </Box>
  );
}
