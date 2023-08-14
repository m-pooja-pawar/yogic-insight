import axios, {AxiosResponse} from 'axios';

import {MultipleSectionsWithHeaderProp} from '../interface/multipleSectionsWithHeaderProp';

export function getLimbsOfHathaYoga(): Promise<AxiosResponse> {
  return axios.get<{data: MultipleSectionsWithHeaderProp}>('/data/limbsOfHathaYoga.json');
}
