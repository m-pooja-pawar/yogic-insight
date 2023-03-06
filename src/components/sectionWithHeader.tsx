import {Box, Typography} from '@mui/material';

import {SectionWithHeaderProp} from '../interface/sectionWithHeaderProp';
import {theme} from '../theme/theme';

export function SectionWithHeader({header, data}: SectionWithHeaderProp): JSX.Element {
  return (
    <Box>
      <Typography component='div' sx={{color: theme.palette.primary.main}} variant='h5'>
        {header}
      </Typography>
      <ul>
        {data.map((element) => {
          return (
            <Typography component='li' key={element} pb={2}>
              {element}
            </Typography>
          );
        })}
      </ul>
    </Box>
  );
}
