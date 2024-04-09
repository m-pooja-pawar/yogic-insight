import {useCallback, useEffect, useState} from 'react';

import {SectionWithHeader} from '../sectionWithHeader/sectionWithHeader';
import {SectionWithHeaderProp} from '../sectionWithHeader/sectionWithHeaderProp';

import {getOrigin} from './origin.api';

// eslint-disable-next-line import/no-default-export
export default function Origin(): JSX.Element {
  const [origin, setOrigin] = useState<SectionWithHeaderProp>();

  const getOriginData = useCallback(async () => {
    getOrigin().then((response) => {
      if (response && response.data) {
        setOrigin(response.data);
      }
    });
  }, [setOrigin]);

  useEffect(() => {
    getOriginData();
  }, [getOriginData]);

  return origin ? <SectionWithHeader data={origin.data} header={origin.header}></SectionWithHeader> : <></>;
}
