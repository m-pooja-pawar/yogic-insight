import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import {Box} from '@mui/material';
import Button from '@mui/material/Button';
import MobileStepper from '@mui/material/MobileStepper';
import {useTheme} from '@mui/material/styles';
import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';

import {AsanaTechnique} from '../asana/asanaProp';
import {AsanaImage} from '../asanaImage/asanaImage';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export function InstructionCarousel(props: {readonly carouselData: readonly AsanaTechnique[]}): JSX.Element {
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
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <Box sx={{width: '100%', flexGrow: 1}}>
        <AutoPlaySwipeableViews
          enableMouseEvents
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}>
          {props.carouselData?.map((step: AsanaTechnique, index: number) => (
            <div key={step.id}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  sx={{
                    height: 255,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    width: '100%',
                    borderBottom: 1,
                    borderColor: 'divider',
                  }}>
                  {step.img ? (
                    <AsanaImage imgSrc={step.img}></AsanaImage>
                  ) : (
                    <Box p={2}>
                      Step {index + 1}. {step.instruction}
                    </Box>
                  )}
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
