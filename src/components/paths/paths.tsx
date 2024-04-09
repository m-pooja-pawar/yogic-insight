import {useCallback, useEffect, useState} from 'react';

import {MultipleSectionsWithHeader} from '../multipleSectionsWithHeader/multipleSectionsWithHeader';
import {MultipleSectionsWithHeaderProp} from '../multipleSectionsWithHeader/multipleSectionsWithHeaderProp';

import {getPaths} from './paths.api';

// eslint-disable-next-line import/no-default-export
export default function Paths(): JSX.Element {
  const [paths, setPaths] = useState<MultipleSectionsWithHeaderProp>();

  const getPathsData = useCallback(async () => {
    getPaths().then((response) => {
      if (response && response.data) {
        setPaths(response.data);
      }
    });
  }, [setPaths]);

  useEffect(() => {
    getPathsData();
  }, [getPathsData]);

  return paths ? <MultipleSectionsWithHeader {...paths}></MultipleSectionsWithHeader> : <></>;
}
