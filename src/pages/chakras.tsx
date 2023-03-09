import {useCallback, useEffect, useState} from 'react';

import {MultipleSectionsWithHeader} from '../components/multipleSectionsWithHeader';
import {MultipleSectionsWithHeaderProp} from '../interface/multipleSectionsWithHeaderProp';
import {getChakras} from '../services/chakras';

// eslint-disable-next-line import/no-default-export
export default function Chakras(): JSX.Element {
  const [chakras, setChakras] = useState<MultipleSectionsWithHeaderProp>();

  const getChakrasData = useCallback(async () => {
    getChakras().then((response) => {
      if (response && response.data) {
        setChakras(response.data.data);
      }
    });
  }, [setChakras]);

  useEffect(() => {
    getChakrasData();
  }, [getChakrasData]);

  return chakras ? <MultipleSectionsWithHeader {...chakras}></MultipleSectionsWithHeader> : <></>;
}
