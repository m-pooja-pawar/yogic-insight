import axios, {AxiosResponse} from 'axios';

import {SectionWithHeaderProp} from '../interface/sectionWithHeaderProp';

export function getOrigin(): Promise<AxiosResponse> {
  return axios.get<{data: SectionWithHeaderProp}>('/data/origin.json');
}
