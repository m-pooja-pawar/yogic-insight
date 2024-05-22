import {Grid, Typography} from '@mui/material';
import {Box} from '@mui/material';
import {Fragment} from 'react';
import {useTranslation} from 'react-i18next';

import {AsanaImage} from '../asanaImage/asanaImage';

import {InstructionCarousel} from './../instructionCarousel/instructionCarousel';
import {AsanaData} from './asanaProp';

export function Asana(data: AsanaData): JSX.Element {
  const {t} = useTranslation('app');
  const header = (): JSX.Element => {
    return (
      <Typography color='primary' component='p' fontWeight={'bolder'} mb={2} variant='h5'>
        {data.header} {data.header_en ? '(' + data.header_en + ')' : ''}
      </Typography>
    );
  };

  const description = (): JSX.Element => {
    return data.description ? (
      <Typography component='p' mb={2}>
        {data.description}
      </Typography>
    ) : (
      <></>
    );
  };

  const startingPosition = (): JSX.Element => {
    return data.startingPosition ? (
      <Box>
        <Typography color='primary' component='p' fontWeight={'bolder'}>
          {data.startingPosition.header}
        </Typography>
        <Box sx={{textAlign: 'center', height: '300px', py: 2}}>
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
              <Typography color='primary' component='p' fontWeight={'bolder'} mt={5}>
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
                        height: '390px',
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
                      {t('step')} {index + 1}. {techniqueData.instruction}
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

  const listSection = (dataToShow: readonly string[] | undefined, heading: string): JSX.Element => {
    return dataToShow ? (
      <>
        <Typography color='primary' component='p' fontWeight={'bolder'} mt={5}>
          {t(heading)}
        </Typography>
        <ul>
          {dataToShow?.map((infoData) => {
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
      {description()}
      {startingPosition()}
      {stages()}
      {listSection(data.info, 'generalInstructions')}
      {listSection(data.benefits, 'benefits')}
      {listSection(data.limitations, 'limitations')}
    </Box>
  );
}
