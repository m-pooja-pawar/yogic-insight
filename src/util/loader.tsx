import {Box, Backdrop, CircularProgress} from '@mui/material';
import {FC} from 'react';

export const Loader: FC<{readonly isLoading: boolean}> = ({isLoading}) => {
  return (
    <Box>
      <Backdrop
        open={isLoading}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
        }}>
        <CircularProgress color='primary' />
      </Backdrop>
    </Box>
  );
};
