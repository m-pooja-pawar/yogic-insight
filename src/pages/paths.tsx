import {useCallback, useEffect, useState} from 'react';

import {MultipleSectionsWithHeader} from '../components/multipleSectionsWithHeader';
import {MultipleSectionsWithHeaderProp} from '../interface/multipleSectionsWithHeaderProp';
import {getPaths} from '../services/paths';

// eslint-disable-next-line import/no-default-export
export default function Paths(): JSX.Element {
  const [paths, setPaths] = useState<MultipleSectionsWithHeaderProp>();

  const getPathsData = useCallback(async () => {
    getPaths().then((response) => {
      if (response && response.data) {
        setPaths(response.data.data);
      }
    });
  }, [setPaths]);

  useEffect(() => {
    getPathsData();
  }, [getPathsData]);

  return paths ? <MultipleSectionsWithHeader {...paths}></MultipleSectionsWithHeader> : <></>;
}
