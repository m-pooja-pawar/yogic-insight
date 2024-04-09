import {useCallback, useEffect, useState} from 'react';

import {SectionWithHeader} from '../sectionWithHeader/sectionWithHeader';
import {SectionWithHeaderProp} from '../sectionWithHeader/sectionWithHeaderProp';

import {getDefinition} from './definition.api';

// eslint-disable-next-line import/no-default-export
export default function Definition(): JSX.Element {
  const [definition, setDefinition] = useState<SectionWithHeaderProp>();

  const getDefinitionData = useCallback(async () => {
    getDefinition().then((response) => {
      if (response && response.data) {
        setDefinition(response.data);
      }
    });
  }, [setDefinition]);

  useEffect(() => {
    getDefinitionData();
  }, [getDefinitionData]);

  return definition ? <SectionWithHeader data={definition.data} header={definition.header}></SectionWithHeader> : <></>;
}
