import {Box, Divider, Typography} from '@mui/material';
import {Fragment} from 'react';

import {SectionWithHeaderProp} from '../interface/sectionWithHeaderProp';

export function SectionWithHeader({header, data, sub_data}: SectionWithHeaderProp): JSX.Element {
  const getSectionData = (sectionData: SectionWithHeaderProp, subHeaderVariant?: boolean): JSX.Element => {
    return (
      <Box>
        <Typography
          color='primary'
          component='p'
          mt={subHeaderVariant ? 3 : 0}
          variant={subHeaderVariant ? 'body1' : 'h5'}>
          {sectionData.header}
        </Typography>
        <ul>
          {sectionData.data.map((element) => {
            return (
              <Typography component='li' key={element} mb={2}>
                {element}
              </Typography>
            );
          })}
        </ul>
      </Box>
    );
  };

  return (
    <>
      {getSectionData({header, data}, false)}
      {sub_data ? (
        sub_data.map((element) => {
          return (
            <Fragment key={element.header}>
              <Divider></Divider>
              {getSectionData(element, true)}
            </Fragment>
          );
        })
      ) : (
        <></>
      )}
    </>
  );
}
