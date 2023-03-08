import {useCallback, useEffect, useState} from 'react';

import {MultipleSectionsWithHeader} from '../components/multipleSectionsWithHeader';
import {MultipleSectionsWithHeaderProp} from '../interface/multipleSectionsWithHeaderProp';
import {getLimbs} from '../services/limbs';

// eslint-disable-next-line import/no-default-export
export default function LimbsOfYoga(): JSX.Element {
  const [limbs, setLimbs] = useState<MultipleSectionsWithHeaderProp>();

  const getLimbsData = useCallback(async () => {
    getLimbs().then((response) => {
      if (response && response.data) {
        setLimbs(response.data.data);
      }
    });
  }, [setLimbs]);

  useEffect(() => {
    getLimbsData();
  }, [getLimbsData]);

  return limbs ? <MultipleSectionsWithHeader {...limbs}></MultipleSectionsWithHeader> : <></>;
}
