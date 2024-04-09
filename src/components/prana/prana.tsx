import {useState, useCallback, useEffect} from 'react';

import {SectionWithHeader} from '../sectionWithHeader/sectionWithHeader';
import {SectionWithHeaderProp} from '../sectionWithHeader/sectionWithHeaderProp';

import {getPranaData} from './prana.api';

// eslint-disable-next-line import/no-default-export
export default function Prana(): JSX.Element {
  const [pranaData, setPranaData] = useState<SectionWithHeaderProp>();

  const getPrana = useCallback(async () => {
    getPranaData().then((response) => {
      if (response && response.data) {
        setPranaData(response.data);
      }
    });
  }, [setPranaData]);

  useEffect(() => {
    getPrana();
  }, [getPrana]);

  return pranaData ? (
    <SectionWithHeader
      data={pranaData.data}
      header={pranaData.header}
      sub_data={pranaData.sub_data}></SectionWithHeader>
  ) : (
    <></>
  );
}
