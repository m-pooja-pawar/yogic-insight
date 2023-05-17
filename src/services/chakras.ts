import axios, {AxiosResponse} from 'axios';

import {MultipleSectionsWithHeaderProp} from '../interface/multipleSectionsWithHeaderProp';

export function getChakras(): Promise<AxiosResponse> {
  return axios.get<{data: MultipleSectionsWithHeaderProp}>('/data/chakras.json');
}
