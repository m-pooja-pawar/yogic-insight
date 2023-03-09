import {useCallback, useEffect, useState} from 'react';

import {SectionWithHeader} from '../components/sectionWithHeader';
import {SectionWithHeaderProp} from '../interface/sectionWithHeaderProp';
import {getDefinition} from '../services/definition';

// eslint-disable-next-line import/no-default-export
export default function Definition(): JSX.Element {
  const [definition, setDefinition] = useState<SectionWithHeaderProp>();

  const getDefinitionData = useCallback(async () => {
    getDefinition().then((response) => {
      if (response && response.data) {
        setDefinition(response.data.data);
      }
    });
  }, [setDefinition]);

  useEffect(() => {
    getDefinitionData();
  }, [getDefinitionData]);

  return definition ? <SectionWithHeader data={definition.data} header={definition.header}></SectionWithHeader> : <></>;
}
