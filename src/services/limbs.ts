import axios, {AxiosResponse} from 'axios';

import {MultipleSectionsWithHeaderProp} from '../interface/multipleSectionsWithHeaderProp';

export function getLimbs(): Promise<AxiosResponse> {
  return axios.get<{data: MultipleSectionsWithHeaderProp}>('/data/limbs.json');
}
