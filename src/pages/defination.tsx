import {useCallback, useEffect, useState} from 'react';

import {SectionWithHeader} from '../components/sectionWithHeader';
import {SectionWithHeaderProp} from '../interface/sectionWithHeaderProp';
import {getDefination} from '../services/defination';

// eslint-disable-next-line import/no-default-export
export default function Defination(): JSX.Element {
  const [defination, setDefination] = useState<SectionWithHeaderProp>();

  const getDefinationData = useCallback(async () => {
    getDefination().then((response) => {
      if (response && response.data) {
        setDefination(response.data.data);
      }
    });
  }, [setDefination]);

  useEffect(() => {
    getDefinationData();
  }, [getDefinationData]);

  return defination ? <SectionWithHeader data={defination.data} header={defination.header}></SectionWithHeader> : <></>;
}
