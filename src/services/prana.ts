import axios, {AxiosResponse} from 'axios';

import {SectionWithHeaderProp} from '../interface/sectionWithHeaderProp';

export function getPranaData(): Promise<AxiosResponse> {
  return axios.get<{data: SectionWithHeaderProp}>('./../../data/prana.json');
}
