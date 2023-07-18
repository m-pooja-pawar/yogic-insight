import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';
import {AsanaList} from '../interface/asanaSequence';
import {Typography} from '@mui/material';
import {AsanaImage} from './asanaImage';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export function Carousel(props: {readonly carouselData: readonly AsanaList[]}): JSX.Element {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = props.carouselData?.length ? props.carouselData?.length : 0;

  const handleNext = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number): void => {
    setActiveStep(step);
  };

  return (
    <Box sx={{display: 'flex', justifyContent: 'center', py: 5}}>
      <Box sx={{maxWidth: 600, width: '100%', flexGrow: 1, boxShadow: 2, borderRadius: 2}}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            bgcolor: 'background.default',
          }}>
          <Typography>
            {props.carouselData[activeStep].label} ({props.carouselData[activeStep].label_en})
          </Typography>
        </Paper>
        <AutoPlaySwipeableViews
          enableMouseEvents
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}>
          {props.carouselData?.map((step: AsanaList, index: number) => (
            <div key={step.id}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  sx={{
                    height: 255,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    maxWidth: 600,
                    overflow: 'hidden',
                    width: '100%',
                    borderTop: 1,
                    borderBottom: 1,
                    borderColor: 'divider',
                  }}>
                  <AsanaImage imgSrc={step.img}></AsanaImage>
                </Box>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          activeStep={activeStep}
          backButton={
            <Button disabled={activeStep === 0} onClick={handleBack} size='small'>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
          nextButton={
            <Button disabled={activeStep === maxSteps - 1} onClick={handleNext} size='small'>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          position='static'
          steps={maxSteps}
          variant='text'
        />
      </Box>
    </Box>
  );
}
