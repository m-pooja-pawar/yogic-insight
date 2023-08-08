import {useState, useCallback, useEffect} from 'react';

import {SectionWithHeader} from '../components/sectionWithHeader';
import {SectionWithHeaderProp} from '../interface/sectionWithHeaderProp';
import {getHathaYogaData} from '../services/hathaYoga';

// eslint-disable-next-line import/no-default-export
export default function HathYoga(): JSX.Element {
  const [hathaYogaData, setHathaYogaData] = useState<SectionWithHeaderProp>();

  const getHathaYoga = useCallback(async () => {
    getHathaYogaData().then((response) => {
      if (response && response.data) {
        setHathaYogaData(response.data.data);
      }
    });
  }, [setHathaYogaData]);

  useEffect(() => {
    getHathaYoga();
  }, [getHathaYoga]);

  return hathaYogaData ? (
    <SectionWithHeader
      data={hathaYogaData.data}
      header={hathaYogaData.header}
      sub_data={hathaYogaData.sub_data}></SectionWithHeader>
  ) : (
    <></>
  );
}
