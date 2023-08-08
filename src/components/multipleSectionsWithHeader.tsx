import {Box, Divider, Typography} from '@mui/material';
import {ElementType} from 'react';

import {MultipleSectionsWithHeaderProp} from '../interface/multipleSectionsWithHeaderProp';
import {SectionWithHeaderProp} from '../interface/sectionWithHeaderProp';

export function MultipleSectionsWithHeader({
  header,
  short_description,
  data,
  sub_data,
  more_data,
}: MultipleSectionsWithHeaderProp): JSX.Element {
  const getSection = (sectionData: readonly SectionWithHeaderProp[]): JSX.Element => {
    return (
      <ol style={{paddingInlineStart: '20px'}}>
        {sectionData.map((element) => {
          return getSectionData(element, 'li');
        })}
      </ol>
    );
  };

  const getSectionData = (element: SectionWithHeaderProp, typographyComponent: ElementType): JSX.Element => {
    return (
      <Box key={'box' + element.header} mt={2}>
        <Typography color='primary' component={typographyComponent} variant='subtitle1'>
          {element.header}
        </Typography>
        <ul style={{paddingInlineStart: '20px'}}>
          {element.data.map((childElement) => {
            return (
              <Typography component='li' key={childElement}>
                {childElement}
              </Typography>
            );
          })}
        </ul>
      </Box>
    );
  };

  return (
    <Box>
      <Typography color='primary' component='p' mb={2} variant='h5'>
        {header}
      </Typography>
      <Typography component='p'>{short_description}</Typography>
      {getSection(data)}
      {sub_data ? (
        sub_data.map((element) => {
          return (
            <Box key={element.id}>
              <Divider></Divider>
              <Typography component='p' mt={3}>
                {element.header}
              </Typography>
              {getSection(element.data)}
            </Box>
          );
        })
      ) : (
        <></>
      )}
      {more_data ? (
        more_data.map((element) => {
          return (
            <Box key={element.header}>
              <Divider></Divider>
              {getSectionData(element, 'p')}
            </Box>
          );
        })
      ) : (
        <></>
      )}
    </Box>
  );
}
