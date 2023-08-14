import {useCallback, useEffect, useState} from 'react';

import {MultipleSectionsWithHeader} from '../components/multipleSectionsWithHeader';
import {MultipleSectionsWithHeaderProp} from '../interface/multipleSectionsWithHeaderProp';
import {getLimbsOfHathaYoga} from '../services/limbsOfHathaYoga';

// eslint-disable-next-line import/no-default-export
export default function LimbsOfHathaYoga(): JSX.Element {
  const [limbs, setLimbs] = useState<MultipleSectionsWithHeaderProp>();

  const getLimbsData = useCallback(async () => {
    getLimbsOfHathaYoga().then((response) => {
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
