import axios, {AxiosResponse} from 'axios';

import {SectionWithHeaderProp} from '../interface/sectionWithHeaderProp';

export function getHathaYogaData(): Promise<AxiosResponse> {
  return axios.get<{data: SectionWithHeaderProp}>('/data/hathaYoga.json');
}
