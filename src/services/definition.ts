import axios, {AxiosResponse} from 'axios';

import {SectionWithHeaderProp} from '../interface/sectionWithHeaderProp';

export function getDefinition(): Promise<AxiosResponse> {
  return axios.get<{data: SectionWithHeaderProp}>('/data/definition.json');
}
