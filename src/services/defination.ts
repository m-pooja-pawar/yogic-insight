import axios, {AxiosResponse} from 'axios';

import {SectionWithHeaderProp} from '../interface/sectionWithHeaderProp';

export function getDefination(): Promise<AxiosResponse> {
  return axios.get<{data: SectionWithHeaderProp}>('./../../data/defination.json');
}
