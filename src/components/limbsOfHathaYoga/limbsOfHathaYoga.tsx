import {useCallback, useEffect, useState} from 'react';

import {MultipleSectionsWithHeader} from '../multipleSectionsWithHeader/multipleSectionsWithHeader';
import {MultipleSectionsWithHeaderProp} from '../multipleSectionsWithHeader/multipleSectionsWithHeaderProp';

import {getLimbsOfHathaYoga} from './limbsOfHathaYoga.api';

// eslint-disable-next-line import/no-default-export
export default function LimbsOfHathaYoga(): JSX.Element {
  const [limbs, setLimbs] = useState<MultipleSectionsWithHeaderProp>();

  const getLimbsData = useCallback(async () => {
    getLimbsOfHathaYoga().then((response) => {
      if (response && response.data) {
        setLimbs(response.data);
      }
    });
  }, [setLimbs]);

  useEffect(() => {
    getLimbsData();
  }, [getLimbsData]);

  return limbs ? <MultipleSectionsWithHeader {...limbs}></MultipleSectionsWithHeader> : <></>;
}
