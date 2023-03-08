import {Box, Typography} from '@mui/material';

import {SectionWithHeaderProp} from '../interface/sectionWithHeaderProp';

export function SectionWithHeader({header, data}: SectionWithHeaderProp): JSX.Element {
  return (
    <Box>
      <Typography color='primary' component='p' variant='h5'>
        {header}
      </Typography>
      <ul>
        {data.map((element) => {
          return (
            <Typography component='li' key={element} mb={2}>
              {element}
            </Typography>
          );
        })}
      </ul>
    </Box>
  );
}
